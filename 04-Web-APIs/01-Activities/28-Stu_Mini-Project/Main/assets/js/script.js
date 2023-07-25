/* STEPS TO CREATING THE GAME: 

Variables: 
  var guessWordsArray;
  var timerLimit;
  var timerCountDown;
  var recordWins;
  var recordLosses;

Data holding arrrays:
- var guessWordsArray;
- var letterPickerArray;

Event Listeners: 
- listen for start button press
- listen for reset button press.

Main Function needed: 
- start the game by pressing the 'start' button
      start the countdown fx
      start the underscore letter clearing fx.
      
Helping functions: 
- record the wins fx.
- clear letter and replace with underscore fx
- start the countdown fx
    saves wins to the localStorage
- record the losses fx.
    saves losses to the localStorage
- you win fx.
    updates the scoreboard with win
- you lose fx. 
    updates the scoreboard with loss

- reset fx
    clears the data in the localStorage.
*/ 

var wordBlank = document.querySelector(".word-blanks"); // = "J _ v _ S c r_ _t" initially
var win = document.querySelector(".win"); // = 0
var lose = document.querySelector(".lose"); // = 0
var timerElement = document.querySelector(".timer-count"); // = 10 initially.
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer; // value assigned in startTimer(). global variable if used >1 but not the case. only used 1 time.
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];


// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads. It uses localStorage to capture the wins losses.
function init() {
  getWins();
  getlosses();
}
// Updates win count on screen and sets win count to client storage
function setWinsToLocal() {
  win.textContent = winCounter;// winCounter increases with winGame() 
  localStorage.setItem("winCount", winCounter);
}
// Updates lose count on screen and sets lose count to client storage
function setsLossesToLocal() {
  lose.textContent = loseCounter; // lossCounter decreases with loseGame()
  localStorage.setItem("loseCount", loseCounter);
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()// fills game with underscores. clears the letters.
  startTimer() 
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWinsToLocal()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setsLossesToLocal()
}

// startTimer() starts and stops the timer and triggers winGame() or loseGame().
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split(""); // = ["V","a","r","i","a","b","l","e"] for example.
  numBlanks = lettersInChosenWord.length; // = 8 for 'Variable'
  blanksLetters = [] // will eventually store the number of underscores as the letter lenght.
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_"); // pushes an underscore same number as letter count.
  }
  console.log("blanksLetters: " + blanksLetters);
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ");
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts by reinitializing them.
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWinsToLocal()
  setsLossesToLocal()

  // should'nt this also reset timer? 

}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
