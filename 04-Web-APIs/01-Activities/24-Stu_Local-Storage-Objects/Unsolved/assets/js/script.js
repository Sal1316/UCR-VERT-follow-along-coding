var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var userObject= {
    fName: "Sal",
    lName: "Ceja",
    email: "salceja@gmail.com",
    password: "Password1234",
  };

  userObject.fName = firstNameInput.value.trim();
  userObject.lName = lastNameInput.value.trim();
  userObject.email = emailInput.value.trim();
  userObject.email = passwordInput.value.trim();
  
  // TODO: Set new submission to local storage 
  localStorage.setItem("userObj", JSON.stringify(userObject)); // still a JSON object so we have to convert it when we get it.

});
