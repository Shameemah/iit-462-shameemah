$.getJSON("cards/aceOfSpades.json", function(card) {
  var $newParagraph = $("<p>");
  $newParagraph.text(card.rank + " of " + card.suit);
  $("main").append($newParagraph);
});

$.getJSON("cards/hand.json", function(hand) {
  var $handList = $("<ul>");

  hand.forEach(function (card) {
    var $cardList = $("<li>");
    $cardList.text(card.rank + " of " + card.suit);
    $handList.append($cardList);
  });
  $("main").append($handList);
});
