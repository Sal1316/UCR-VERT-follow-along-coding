// fx returns true if email string matches the pattern or false if it doesnt.
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// fx returns true if password string matches the pattern or false if it doesnt.
export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/; //between 8 and 15 characters long ({7,14})
  if (input.match(passw)) {
    return true;
  }
  return false;
}

/*NOTES: 

-Both functions are exported as 'named' exports (export function ...). 
Named exports allow these functions to be selectively imported by NAME in other modules where needed. 
The absence of default export means that when importing these functions elsewhere, 
they need to be imported using the EXACT NAMES, (validateEmail and checkPassword). 

import { validateEmail, checkPassword } from './utils/helpers.js'; For instance:

-In JavaScript, the test() method is a method available on regular expression objects 
that checks if a string matches the regular expression pattern. It returns true if the 
string matches the pattern and false otherwise.


*/
