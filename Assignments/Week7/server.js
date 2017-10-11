var express = require("express");
var app = express();
const port = 8000;

var id;
var singleHand;
var hands =
  [
    {
      "id" : "1",
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
      "id" : "2",
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

    if (!hands[id-1]) {
      return res.status(404).send("Error 404 - Not found");
    } else {
      return res.status(200).send(hands[id-1]);
    }
});

app.get("/hands/:id/cards", function(req, res) {

    id = req.params.id;

    if (!hands[id-1]) {
      return res.status(404).send("Error 404 - Not found");
    } else {
      return res.status(200).send(hands[id-1]["cards"]);
    }
});

app.post("/hands", function (req, res) {

    id = hands.length+1;
    singleHand =
    [
      {"suit" : "hearts", "rank" : "a"},
      {"suit" : "hearts", "rank" : "k"},
      {"suit" : "hearts", "rank" : "j"},
      {"suit" : "hearts", "rank" : "q"},
      {"suit" : "hearts", "rank" : "2"}
    ]

    var hand = {};
    var newPostId = {};

    newPostId.id = id;
    hand.id = id;
    hand.cards = singleHand;
    hands.push(hand);

    id++;
    res.send(newPostId);
})

app.put('/hands/:id', function(req,res) {

      id = req.params.id;
      singleHand =
      [
        {"suit" : "spades", "rank" : "6"},
        {"suit" : "hearts", "rank" : "7"},
        {"suit" : "clubs", "rank" : "q"},
        {"suit" : "spades", "rank" : "2"},
        {"suit" : "spades", "rank" : "k"}
      ]

    if (hands[id-1]) {

        console.log("Updating record ID number: " + hands[id-1].id);
        console.log(hands[id-1].cards);

        hands[id-1].cards = singleHand;

        // Log the update
        console.log("Updated to:");
        console.log(hands[id-1].cards);

        res.status(204).send("204: No content");
    } else {
        res.status(404).send("404: This hand ID was not found");
    }
});

app.listen(port, function () {
  console.log('Server is running on port ' + port);
})
