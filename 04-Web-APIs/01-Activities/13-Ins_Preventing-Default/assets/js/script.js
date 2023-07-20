var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  console.log(event);
  // Prevent default action
  event.preventDefault();// need this bc after submitting, the forms clear the data (reloads the page).
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// addEventListener know that the 'event' is click event.
submitEl.addEventListener("click", showResponse);