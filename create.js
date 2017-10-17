var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { name: "Ben" };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].name);
    db.close();
  });
});