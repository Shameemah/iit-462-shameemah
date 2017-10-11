var express = require("express");
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var app = express();
var db;

const port = 8000;

post_params = JSON.stringify(
  [
    {"suit" : "diamonds", "rank" : "4"},
    {"suit" : "hearts", "rank" : "3"},
    {"suit" : "diamonds", "rank" : "a"},
    {"suit" : "spades", "rank" : "2"},
    {"suit" : "spades", "rank" : "9"},
  ]
)

MongoClient.connect('mongodb://localhost:27017/hands', function (err, database) {
  if (err)
    throw err
  else
    {
      db = database;
      console.log("Connected to MongoDB");
      app.listen(port);
      console.log("Listening on port " + port)
    }
});


app.get("/hands/:id", function(req, res) {
    db.collection('hands').find({"_id" : ObjectId(req.params.id)}).toArray(function (err, result) {
      if (err) console.log(err);
      if (result.length < 1) { res.status(404).send("Not found.");}
      if(result) { res.status(200).send(result);}
    })
});

app.get("/hands/:id/cards", function(req, res) {
    db.collection('hands').find({"_id" : ObjectId(req.params.id)}).toArray(function (err, result) {
      if (err) console.log(err);
      if (result.length < 1) { res.status(404).send("Not found.");}
      if(result) { res.status(200).send(result[0]["cards"]);}
    })
});

// app.post('/hands', function (req, res) {
//
//   MongoClient.connect('mongodb://localhost:27017/hands', function (err, db) {
//
//     db.collection('hands').insertOne(post_params, function (err, result) {
//       if (err) console.log(err);
//       console.log(result);
//       res.status(200).send(result[0]["_id"]);
//     })
//   })
// });
