var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];

var rpsGame = function () {
  var userChoice = window.prompt("Enter R, P, or S:"); // prompt saves the values inputed by the user. if press cancel, returns undefined.

  if(!userChoice){
      console.log("Game Ended.")
      return; // exits the game if there is not user chice.
  }

  userChoice = userChoice.toUpperCase();

  var computerChoice = options[Math.floor(Math.random()*options.length)];

  window.alert("The computer chose: " + computerChoice)

};

rpsGame();
