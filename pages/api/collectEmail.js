import { google } from 'googleapis';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;


    try {

      // Authenticate with Google Sheets
      const auth = new google.auth.GoogleAuth({
       
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });


      const sheets = google.sheets({ version: 'v4', auth });

      const spreadsheetId = '1-07Xzz-tdUtTIGfd3mTGJszOBnGpz_TWIShWgTWVQPE';
      const range = 'Sheet1!A:B'; 
   
      // Appending email and timestamp to the sheet
     await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [email, new Date().toLocaleString()], 
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
