import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {

      // Authenticate with Google Sheets
      const auth = new google.auth.GoogleAuth({
        credentials: {
          "type": "service_account",
          "project_id": "eternal-ruler-426019-n5",
          "private_key_id": "28c58f74d7384fab194150c6e11631af3a7dbaa5",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDcSotrFHQmgzT/\nitJKwXnZj0FgYrVBiuCw+kQLEDRSimZp62w5xneFHltj2tbP1pUfQj/DsrSvVIlZ\nnGyzHlCauEv388QjJeteDCRwwqxftW/jR3GBDbWMS6/eBuryY8zlqG3jhF5q9Pbb\nU1pD3+In6TiHZekNFWlysgOUZxAHjBttq9kxVFWscFdvAUSgS8HAdonMsDLl/cJA\nMVppr0uoHnXDCkVqjaGX42/hUClUi9zJLIe3h0OPsRA1nKJl0ohC/zM0lblOpD6f\n9NyYGecWA5r3p9KNxzdqtrwxKE8ES/sstOV6NX38NHrGPs1sC5j59IMW9EDfHgyQ\nQoRgBmqzAgMBAAECggEAZYdh3FdP9RQR0BkuNNAZFcFls0OrIGsehdLCm4q7YrNw\n4i5j8fjbyxmjq1EIIkBW+FIzS0HI7un6Z7eljaRSKAz6zmumIUDvyqez/9hpU68u\nw0SBNqaX3vJfOuhbTp3aqJpJE0xFq+v8/jbbal78P8LIj/bTQ3lz4S3UYohhpef9\nKPAvJr4c9FKAJcZDCtV7SIAqHM79EXk4E2D+bpPdx9rmlf8Y9IjVK8yq4EzgpeiN\n94vB7ry0tvQ8UWVi5Dv08wmdYERqgpjBpp6vZc4h6t2H1dwAB6Xo/UhyuB9r045j\np5HONVhxqSu+MVRJDjGRPn1IRghPbFwkxBD/X3gR2QKBgQDxsXjbsI4LJ2c+ub+6\nOvi934Gcr9q33eDGTxFXGFsAQC122kFs4qvK4GWGTnfZJ3jCqQlSycwTAVm2vNcS\nYdI9ldex1UkVIo6xBmpGjU8uU6X6YbTD80NTrctFz9nM0Jm2yiEo360xSXnJmQ3A\nb63G4g8d5lZSOpfSHe30Oja7hwKBgQDpVMD4PYuZ9MEv5PpFuiZ50Hff7NQKcuR/\n0qNtCQO1DfGRfhcXXuNtFztF3wYskpmVIwwDknQ6yepT8MCTmpxQag7hedz0QZ4z\nP6Xx0Xwur6xzgpn5DbataK3Llk1hvcR+965k0GEz03mQW+3ylLCdAuXjjBh7nfn8\nCCb8rhEadQKBgQDHYdCB6zRCn07cv/8acmugtzEFQUz9QVycO73iS4VGv6rB0WsH\nmDaANn2KPlFAIv/MFgZK9Y4UX5jS1xXVZD078NDvMzQG62srPk+NxCT94qOZ2eB1\nhciUz1pRTRYvkCY+VKDmRx9o+WQumsRta7O/zd0KnWm4i/2SqH4Ua7GbIQKBgQCe\nmbiNRDBXFtIV/xvLN4wdswE4mV9MNupwpDnnzH/TmsW/8qg5f4sxROBKTx2AQKna\ngLcS2oLczxDTu8r6ydZEpsK0qsPw14V0Kmhe5dj2VvzuizCj5JluZ7/yqZixvm8J\nKsxExIu90ZpI8OPdxwoBv82JjVm69RfOI7B0gtEnXQKBgQCGUD9F8jVfeigKMzNm\nIEEKoMkB6UQMMmpvflRICBslZLX4Tfer6qbzDa3IsRZSao6yqoqCGyIvOwq+6zgK\nmoZoRm1T0PT/6Jw3OteJrAOE9WLxR+vYxlhGe5H2xz4DmmTmFOGL39/BQRXYnmRX\nM9Ssu4O0R/ZxcIVNXvNj+DDqWw==\n-----END PRIVATE KEY-----\n",
          "client_email": "devnexts-mails@eternal-ruler-426019-n5.iam.gserviceaccount.com",
          "client_id": "111817609323526729014",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/devnexts-mails%40eternal-ruler-426019-n5.iam.gserviceaccount.com",
          "universe_domain": "googleapis.com"
        },
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });


      const sheets = google.sheets({ version: 'v4', auth });

      const spreadsheetId = "1-07Xzz-tdUtTIGfd3mTGJszOBnGpz_TWIShWgTWVQPE";
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
