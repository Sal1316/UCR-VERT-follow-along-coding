var generateBtn = document.querySelector("#generate");

// Write password to the #password input to show on screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var passwordCharString = []; // we will populate this string with the upper, lower case, numbers, and chars. the goal is to get a string and randomly pick and index to add to our randomly generated password.

  const passLength = window.prompt("Choose the password length");
  if (passLength < 8 || passLength > 128) {
    window.alert("The password must be between 8 and 128 characters.");
    generatePassword();
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  if (includeLowerCase) {
    passwordCharString.push(...lowerCase);
  }
  if (includeUpperCase) {
    passwordCharString.push(...upperCase);
  }
  if (includeNumbers) {
    passwordCharString.push(...numbers);
  }
  if (includeSpecialChars) {
    passwordCharString.push(...specialChars);
  }

  // randomly generate password:
  var generatedPassword = "";
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharString.length);
    var randomChar = passwordCharString[randomIndex]; // gets random char out.
    generatedPassword += randomChar; // adds char to end of string.
  }

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* NOTES:
  
The spread operator (...) is used to spread each string into individual 
characters and push these characters into the passwordCharString array. 
Essentially, it allows adding the characters from these strings directly 
into the passwordCharString array as individual elements rather than as 
whole strings. Otherwise, you would get a password that is longer than 
the specified length because it would add the whole string each time it iterates.

  
*/
