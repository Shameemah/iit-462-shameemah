var express = require("express");
var app = express();
const port = 8000;

app.listen(port, function () {
  console.log('Server is running on port ' + port);
})

var id;
var hands =
  [
    {
      "id" : "0",
      "cards" :
      [
        {"suit" : "diamonds", "rank" : "4"},
        {"suit" : "hearts", "rank" : "3"},
        {"suit" : "diamonds", "rank" : "a"},
        {"suit" : "spades", "rank" : "2"},
        {"suit" : "spades", "rank" : "9"}
      ]
    },
    {
      "id" : "1",
      "cards" :
      [
        {"suit" : "spades", "rank" : "k"},
        {"suit" : "hearts", "rank" : "j"},
        {"suit" : "clubs", "rank" : "q"},
        {"suit" : "spades", "rank" : "1"},
        {"suit" : "spades", "rank" : "8"}
      ]
    }
  ]

app.get("/hands/:id", function(req, res) {

    id = req.params.id;

    if (!hands[id]) { res.status(404).send("Error 404 - Not found");}
    res.status(200).send(hands[id]);
})

app.get("/hands/:id/cards", function(req, res) {

    id = req.params.id;

    if (!hands[id]) { res.status(404).send("Error 404 - Not found");}
    res.status(200).send(hands[id]["cards"]);
})
//
// app.post('/hands', function (req, res) {
//     db.collection('hands').insertOne(post_params, function (err, result) {
//       if (err) console.log(err);
//       console.log(result);
//       res.status(200).send(result[0]["_id"]);
//     })
// });
