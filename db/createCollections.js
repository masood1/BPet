var MongoClient = require("mongodb").MongoClient;
var propertiesreader = require("properties-reader");
var property = propertiesreader("../config/properties.js");
var url = property.dbUrl;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(property.dbName);
  dbo.createCollection("pet", function(err, res) {
    if (err) throw err;
    console.log("pet Collection created!");
    db.close();
  });
});
