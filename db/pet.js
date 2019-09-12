var MongoClient = require("mongodb").MongoClient;
var propertiesreader = require("properties-reader");
var property = propertiesreader("../config/properties.js");
var url = property.dbUrl;

module.export = function addPet(data) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(property.dbName);
      dbo.collection("pet").insertOne(data, function(err, res) {
        if (err) throw reject(err);
        console.log("following data added in pet collection", data);
        resolve("Inserted");
        db.close();
      });
    });
  });
};
