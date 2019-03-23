// Environment setup
require('dotenv').config({ silent: true });
// Hold application secrets and config
module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  dbUri: process.env.MONGODB_URI,
  appSecret: process.env.APP_SECRET,
  webAppUrl: process.env.WEB_APP_URL,
};
