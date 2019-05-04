# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

# `Memory Game`

## Aim:

The main aim is to design a memory game with given specifications in the Project.

### How to start

clone the repository given by the Udacity. some folders and files are given already with some code in it. Those folders and files are
  1. css folder
    1. app.css
  2. img folder
  3. js folder
    1. app.js
  4. CONTRIBUTING.md
  5. .gitignore
  6. .gitattributes
  7. index.html
  8. README.md

### what is the memory game?

The memory game is the basic matching game to test the player's memory. In a deck of paired cards, the player needs to match each pair to win the game.

### Requirements for the game.

`Memory game logic` - The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

`Congratulations pop-up` - when a user wins the game a model appears to congratulate the player and asks if they want to play again. It should also tell the player how much time it took to took to win the game, and what the star rating was.

Restart Button - A restart button should reset the game board, timer and star rating.

`Star rating` - The game displays the star rating (3 stars) that reflects the player performance. At the beginning of a it should display at least 3 stars. After some number of moves, there should be the decrease in the stars. For some more moves it should decrease in some more moves.

`Timer` - When the player starts the game the timer should start and when the player wins the game it should stop.

`Move counter` - Game has to display how number of moves the player have made.

`Restart` - Game has to include the restart button.

### What to do?

-   Created a list that holds all of the cards.
-   display the cards on the page and shuffle those cards using shuffle function.
-   The game has to display the cards when player click on particular card.so use addEventListener().
-   check for matching the cards, if two cards are matched then show the cards or set the cards as it is within certain time interval using setTimeout().
-   Increase the count when player clicks a card.
-   when the player begins the game set the time using setInterval() function.
-   for every certain moves decrease the a star from three stars.
-   When a player clicks the restart button reset the cards, stars, moves and time using location.reload().  
-   When the player successfully completes the game a pop-up should display with the parameters like how much time, moves he took and how many stars he won and also it should ask whether the player wants to play again or not.
-   we have to be sure that when the player wins the game the time has to stop. This can be done using clearInterval().

## Conclusion-

From the Memory Game one can learn the HTML and CSS much better and also learn how to combine different functions.

# Memory-Game
