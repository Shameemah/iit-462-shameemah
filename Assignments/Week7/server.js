var express = require("express");
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var app = express();

const port = 8000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get("/hands/:id", function(req, res) {

  MongoClient.connect('mongodb://localhost:27017/hands', function (err, db) {

    db.collection('hands').find({"_id" : ObjectId(req.params.id)}).toArray(function (err, result) {
      if (err) console.log(err);
      if (result.length < 1) { res.status(404).send("Not found.");}
      if(result) { res.status(200).send(result);}
    })
  })
});
