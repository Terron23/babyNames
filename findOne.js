var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Product").insert({ user_id: "bcd002", age: 35, status: "I" }
), function(err, result) {
    if (err) throw err;
    console.log("result");
    db.close();
  }
})

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Product").insert({ user_id: "bcd002", age: 35, status: "I" }
), function(err, result) {
    if (err) throw err;
    console.log("result");
    db.close();
  }
})

