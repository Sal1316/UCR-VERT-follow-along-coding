// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password based on criteria
function generatePassword() {
  // Arrays of different character types
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var possibleChars = [];

  var length = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  // Validate length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return "";
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  // Add selected character types to possibleChars array
  if (includeLowerCase) {
    possibleChars.push(...lowerCase);
  }
  if (includeUpperCase) {
    possibleChars.push(...upperCase);
  }
  if (includeNumbers) {
    possibleChars.push(...numbers);
  }
  if (includeSpecialChars) {
    possibleChars.push(...specialChars);
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
