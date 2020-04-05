//this file is template for configuration.
// name of this file must be index.js!

module.exports = {
  mongodb: { connectURL: "mongodb://****:27017/****" },
  google: {
    CLIENT_ID: "*****.apps.googleusercontent.com",
    SECRET: "****",
    CALLBACK_URL: "http://localhost:3000/auth/google/callback"
  }
};
