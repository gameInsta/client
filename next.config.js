/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET:
      process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID:
      process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID:
      process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    REACT_APP_NFT_PORT_KEY: process.env.REACT_APP_NFT_PORT_KEY,
    REACT_APP_INFURA_ID: process.env.REACT_APP_INFURA_ID,
    REACT_APP_FORTMATIC_KEY: process.env.REACT_APP_FORTMATIC_KEY,
    REACT_APP_BITSKI_CLIENT_ID: process.env.REACT_APP_BITSKI_CLIENT_ID,
    REACT_APP_MORALIS_API_KEY: process.env.REACT_APP_MORALIS_API_KEY,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    CHAT_IDS: process.env.CHAT_IDS,
    BOT_ID: process.env.BOT_ID,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "source.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ]
  },
};