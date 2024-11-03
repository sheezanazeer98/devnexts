/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GOOGLE_SERVICE_ACCOUNT_CREDENTIALS: process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
      GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    },
  };
  
  module.exports = nextConfig;
  