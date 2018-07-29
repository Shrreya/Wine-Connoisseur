var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
require('dotenv').config();

// Retrieve essential environment variables
const databaseURI = process.env.MONGODB_URI;
const appId = process.env.APP_ID;
const masterKey = process.env.MASTER_KEY;
const serverURL = process.env.SERVER_URL;
const appName = process.env.APP_NAME;
const port = process.env.PORT || 1337;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

// Check for missing environment variables
if(!databaseURI || !appId || !masterKey || !serverURL || !username || !password) {
  console.log('Please check environment variables!')
  return false;
}

// Create express app
var app = express();

// Parse API configurations
var api = new ParseServer({
  databaseURI: databaseURI,
  appId: appId,
  masterKey: masterKey,
  serverURL: `${serverURL}/api`
});

// Serve the Parse API on the required URL
app.use('/api', api);

// Parse dashboard configurations
var dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: `${serverURL}/api`,
        appId: appId,
        masterKey: masterKey,
        appName: appName
      }
    ],
    users: [
      {
        user: username,
        pass: password
      }
    ]
  },
  {
    allowInsecureHTTP: true
  }
);

// Serve the Parse dashboard on the required URL
app.use('/dashboard', dashboard);

// Display info message on the root URL
app.get('/', function(req, res) {
	res.status(200).send('Parse Server for Wine Connoisseur Backend');
});

// Set up HTTP server on express app
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log(`Wine Connoisseur Server running at ${serverURL}/api `);
});
