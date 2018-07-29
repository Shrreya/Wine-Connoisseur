var Parse = require('parse');
require('dotenv').config();
Parse.initialize(process.env.REACT_APP_BACKEND_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

export function getInitialData () {
  var Wine = Parse.Object.extend("Wine");
  var wineQuery = new Parse.Query(Wine);
  return wineQuery.find();
}
