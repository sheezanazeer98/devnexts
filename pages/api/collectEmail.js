import { google } from 'googleapis';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;


    try {

      // Authenticate with Google Sheets
      const auth = new google.auth.GoogleAuth({
        credentials:{
          "type": "service_account",
          "project_id": "eternal-ruler-426019-n5",
          "private_key_id": "6adad990e28a4ad768fb3147e07652959c6401ab",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpj8AMnMX5RPTv\nvVpuGSOTz+AOvYEYvDh69infsPmbX/k45rzLyGJTBtfZpAKhxXNHml0TXiBQ3Pgr\nVxwM5uZR6GlqPqYw0Al8hWHRgfo43xw3B8FbUyLp6oDTcx5O1d6FM2iQVNPx9thb\nkE2r3ibrYE74PM8eNlaJnq0/l7Zoo++q+t+lGdSaUHz8yMprGjQnB9eg9k3snAuC\nkDodx+MA0LOmciEfGW3XLQvDAye/tKuOkZCspVjZ/BBvW3W1InVXekbFE7zQLzn0\nCaMi+yG1MskCKl/euYDNJy+/kVTsvFTk0kLNoYKekTwywvBDkZYN6s3vvuy4/QQ8\nfEZnyg3hAgMBAAECggEAAmEFcUfb0TkB9MEj3SqWILNIcfx/rLCrXDJK+Rv7DI6G\nqSE3oeZQVtjgO2n9LXbfPLByQNzPuEK5aqZAuv+cWKbZn8d8PnAUyf33FuDreVPM\nCgueT2E1urFzGERjtvhyNE052NiP1rO/al12cYRe6GuEACCeSU663RhwVtWSlho8\n2Wt5qxYMwBPRpNgaiJvg5AVe55ZES+gvUYX2Vj0M8OdyZgULjaoS+ck9nO0tz9yY\nPGN5z6WTkJZoKF/uZ+a9FaO5tjJ6BP64QgkgVYGXMpRfFec0ma16FDenV2GwEDlj\ncJXcWSleMsFbQEKNLnC2iWqqvo2RJVo6aA6TI54UFwKBgQDlg7PIOm1rPr4o8RVz\neF8RLMbJa2quneMFKeU+6t7yhRlNQbhzzzsgYWUIjtRLdK2e1bOR8YdxaaUwfukh\n42CuzaGwL7dXyKCTfExyKuqPiSI+8hpk8EUTbSOalqjMgYnMYAuMCYTC3LFy11LS\nxwNKNZH62mu+d1dJUAaOX8Tj4wKBgQC9IOxN9+gtL2yKtVLnYom39MCWyDiMd2BJ\nqgZ6hDzUp5j4AyhTU5doXaNt7anaMZQtcLMQYD8di1ptBAzEn3absmht9PFsjfa0\nvB8W5ou2LdrmJAbuS9cxLxZ/krJlpEkJ/NPRWSROIX5XLP+DhuLwoQaCSFOuoHtW\n5PKr3etaawKBgBv3qoaxp/ezk5SFnCmP93WuUSLmNf/FOY69hjPehwBie6zQX1ut\nWvUdKSSb0v7G3wlF3TXhirGlP/3i2SHKBVQHtrYzelH2HqsaMG6REDgha8zjz5eR\nN7mgSQBjb3pMJrCC26Va25SrM+xclLkeiyYV1Q4OY6a4ACjs2X+r5+AlAoGBALx0\nDOLYDrLPmZFRgo1rY504tZrJYYeeAAUG9bOpBtBDPCqNQuZc2fa1r35/Hgt78ZGh\nxduge+Odkvoj2fEmkFIuYN6H/vTTNKv88+Gm0joy0PcXmQxj58ZrjDiMXVTocZsR\nIaNt9r4fo7uL7AMMKh/p5Al3tmLAKIZ6VdCprbWHAoGBALxQx4jpmQjQ7GE8xw8G\nXRlVn6pNsnapMsgHpigBavVDo200yaERR5DMXvKyzDpt1iLvgoniK5/hl2XlXPAJ\n4YJ/ZoE1D8vyqL3x/7Ib2gf3Ghbh/PuTao02jaKtx/1zuNEZZIC+MnZvroFDx97o\neojmgVmOSq4TxSBTcOXEFIBl\n-----END PRIVATE KEY-----\n",
          "client_email": "devnexts@eternal-ruler-426019-n5.iam.gserviceaccount.com",
          "client_id": "110964184064685227640",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/devnexts%40eternal-ruler-426019-n5.iam.gserviceaccount.com",
          "universe_domain": "googleapis.com"
        },        
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
