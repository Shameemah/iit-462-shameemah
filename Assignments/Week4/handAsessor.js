var hand = [
   { "rank":"two", "suit":"spades" },
   { "rank":"two", "suit":"spades" },
   { "rank":"three", "suit":"spades" },
   { "rank":"three", "suit":"clubs" },
   { "rank":"two", "suit":"spades" }
];

var ranks = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];
var suits = ["spades", "hearts", "clubs", "diamonds"];
var containsPair = function (hand) {

        //Default result is bust
        var result = "Bust", handRanks, handSuits;

        // array of hand ranks
        handRanks = hand.map(function (card) {
          return card.rank;
        });

        // array of hand suits
        handSuits = hand.map(function (card) {
          return card.suit;
        });

        // search for a pair of any rank
        ranks.forEach(function (rank) {
            if (containsNTimes(handRanks, rank, 2)) {
                var ranks = rank;
                if (ranks.length = 2 ) {
                  result = "Two Pair";
                }
            } else if (containsNTimes(handRanks, rank, 3)) {
                result = "Three of a Kind";
            } else if (containsNTimes(handRanks, rank, 4)) {
                result = "Four of a Kind";
            } else if (containsNTimes(handSuits, suits, 5)) {
              result = "Flush";
            } else {
              suits.forEach(function (suit) {
                  if (containsNTimes(handSuits, suit, 5)) {
                        result = "Flush";
                      }
            });
          }

        // this is set to "Bust" if no other options are found
        console.log(result);
    });
}

function containsNTimes(array, string, numTimes) {
  var count = 0;
  for(var i = 0; i < array.length; i++) {
    if(array[i] === string) {
      count++;
    }
  }

  if (count === numTimes) {
    return true;
  } else {
    return false;
  }
}
