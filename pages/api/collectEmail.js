import { google } from 'googleapis';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;

    console.log(formData);

    try {


      // Authenticate with Google Sheets
      const auth = new google.auth.GoogleAuth({
        credentials:{
          type: process.env.GOOGLE_TYPE,
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: process.env.GOOGLE_AUTH_URI,
          token_uri: process.env.GOOGLE_TOKEN_URI,
          auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
          client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
          universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
        },    
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });


      const sheets = google.sheets({ version: 'v4', auth });

      const spreadsheetId = '1-07Xzz-tdUtTIGfd3mTGJszOBnGpz_TWIShWgTWVQPE';
      const range = 'Sheet1!A:F'; // Extend the range to include six columns (A through F)
      
      // Appending six columns of data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              formData.firstName,               
              formData.lastName,                 
              formData.email,                   
              formData.assistance ,             
              formData.message,                   
              new Date().toLocaleString(), 
            ], 
          ],
        },
      });

   
      console.log("send");

      res.status(200).json({ message: 'Email collected successfully!' });
    } catch (error) {
      console.error('Error writing to Google Sheets:', error);
      res.status(500).json({ message: 'Failed to collect email.' });
    }
  } else {
    // Send a 405 Method Not Allowed if the request is not POST
    res.status(405).json({ message: 'Method not allowed' });
  }
}
