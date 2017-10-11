var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
const port = 8000;

// Using a front-end so I can actually test this
app.use(express.static(path.join(__dirname, 'public')));

// Allow req.body to work
app.use(bodyParser.urlencoded({
   extended: true
}));


var id;
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

// app.post("/hands", function(req, res) {
//   console.log("calling post");
//   res.end();
// });

// app.post("/hands", function (req, res) {
//
//     console.log(req.body);
//     id = hands.length+1;
//
//     var singleHand =
//     [
//       {"suit" : "spades", "rank" : "k"},
//       {"suit" : "hearts", "rank" : "j"},
//       {"suit" : "clubs", "rank" : "q"},
//       {"suit" : "spades", "rank" : "1"},
//       {"suit" : "spades", "rank" : "8"}
//     ]
//
//     var hand = {};
//     var postId = {};
//
//     postId.id = id;
//     hand.id = id;
//     hand.cards = singleHand;
//     hands.push(hand);
//
//     console.log(hands);
//     res.send(postId);
// })

app.put('/hands/:id', function(req,res) {
  var singleHand =
      [
        {"suit" : "spades", "rank" : "6"},
        {"suit" : "hearts", "rank" : "7"},
        {"suit" : "clubs", "rank" : "q"},
        {"suit" : "spades", "rank" : "2"},
        {"suit" : "spades", "rank" : "k"}
      ]

      id = req.params.id;

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
