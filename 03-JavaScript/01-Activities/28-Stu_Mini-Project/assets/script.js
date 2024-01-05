var wins = 0;
var losses = 0;
var ties = 0;
var messageEl = document.querySelector('#message');

var options = ["R", "P", "S"];

var playGame = function () {
  var userChoice = window.prompt("Enter R, P, or S for Rock, Paper, or Scissors:"); // prompt saves the values inputed by the user. if press cancel, returns undefined.

  if (!userChoice) {
    console.log("Game Ended.");
    messageEl.textContent = "The Game Was Ended. Have a NIce Day!";
    return; // exits the game if there no user choice.
  }

  userChoice = userChoice.toUpperCase();

  var computerChoice = options[Math.floor(Math.random() * options.length)];

  window.alert("The computer chose: " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("Its a tie!");
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You won!");
  } else {
      losses++;
      window.alert("You Lost!")
  }

  window.alert(`Status: \nWins: ${wins} \nLosses: ${losses} \nTies: ${ties}`)

  var playAgain = window.confirm("Play again?")

  if(playAgain) {
      playGame();// recursion bc you are calling the function you are in.
  } 

  messageEl.textContent ="Thank you for playing.."
};

playGame();
