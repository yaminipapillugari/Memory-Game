/*
 * Create a list that holds all of your cards
 */
let cards = document.querySelectorAll(".card");
var allCards = [...cards];
var cardsOpen = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

var displayCard = function() {
  if (timer == 0) {
    timeCount();
    timer = 1;
  }
  if (!this.classList.contains("open") && cardsOpen.length < 2) {
    this.classList.add("open", "show", "disabled");
    cardsOpen.push(this);
    matchCards();
  }

}
//To display the cards
for (var i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", displayCard);
};
// deck
var deck = document.querySelector(".deck");
// shuffle all cards using shuffle()
var shuffleCards = shuffle(allCards);
shuffleCards.forEach(i => {
  [].forEach.call(shuffleCards, function(item) {
    deck.appendChild(item);
  });
});

// match condition
var count = 0;
function matchCards() {
  setTimeout(function() {
    if (cardsOpen.length === 2) {
      movesCount();
      if (cardsOpen[0].children[0].className == cardsOpen[1].children[0].className) {
        for (let i in cardsOpen) {
          cardsOpen[i].classList.add("match");
          cardsOpen[i].classList.remove("open", "show");
        }
        gameOver();
      } else {
        for (let i in cardsOpen) {
          cardsOpen[i].classList.remove("open", "show", "disabled");
        }
      }
      cardsOpen = [];
    }
  }, 300);
}

//moves count

var m = document.querySelector(".moves");

function movesCount() {
  moves = m.innerHTML;
  moves++;
  m.innerHTML = moves;
  starRating();
  if (moves == 0) {
    second = 0;
    minute = 0;
    timeCount();
  }
}

//To start time when the game starts

var timer = 0;
var time = document.querySelector(".Timer");
var minute = 0,
  second = 0;
var t;

function timeCount() {
  t = setInterval(function() {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      minute = 0;
    }
    time.innerHTML = minute + " mins " + second + " secs";
  }, 1000);
}
//decrease in star rating according to the moves
var allStars = document.querySelectorAll('.fa-star');
var aStars = [...allStars];
var nos = 3;

function starRating() {
  if (moves == 25) {
    aStars[2].classList.add("fa-star-o");
    aStars[2].classList.remove("fa-star");
    nos--;
  }
  if (moves == 45) {
    aStars[1].classList.add("fa-star-o");
    aStars[1].classList.remove("fa-star");
    nos--;
  }
}
//restart the game when the refresh button is clicked
var restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", reStart);

function reStart() {
  location.reload();
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//display congratulation pop-up
function gameOver() {
  count++;
  if (count == 8) {
    clearInterval(t);
    swal({
      title: "congratulations!You won the game",
      html: "You made " + m.innerHTML + " moves" + " in " + time.innerHTML +
        "<br>Rating: " + nos + '<i class="fa fa-star"></i>',
      confirmButtonText: "Play Again"
    }).then(function() {
      location.reload();
    });
  }
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
