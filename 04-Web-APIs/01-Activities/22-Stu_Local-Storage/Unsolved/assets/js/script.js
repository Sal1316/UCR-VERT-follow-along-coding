var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var count = localStorage.getItem("count");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var userEmail = localStorage.getItem("userEmail"); //gets registered user from local storage. You can use what ever name you want.
  var userPass = localStorage.getItem("userPass"); //gets registered user
  
  userEmailSpan.textContent = userEmail;
  userPasswordSpan.textContent = userPass;

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("userEmail", email) // "userEmail" is assigned the value inside 'email'
  localStorage.setItem("userPass", password) // "userPass" is assigned the value inside 'password' variable.

  }
});
