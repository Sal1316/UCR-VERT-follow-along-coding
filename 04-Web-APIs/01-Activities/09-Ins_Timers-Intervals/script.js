// Selects element by class
var timeEl = document.querySelector(".time");
// Selects element by id
var mainEl = document.getElementById("main");

// calling the function:
setTime();

// functions: 

function setTime() {
  var secondsLeft = 6;
 
  var timerInterval = setInterval(function() { // Sets interval in variable
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {// Stops execution of action at set interval
      clearInterval(timerInterval); // this fx stops the timer
      appendToImg(); // Calls function to create and append image
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function appendToImg() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxmaXJld29ya3N8ZW58MHx8fHwxNjg5ODEwOTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080");
  mainEl.appendChild(imgEl);
}

