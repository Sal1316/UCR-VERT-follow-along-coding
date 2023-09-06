class Validate {
  isPassword(password) { // dont need .prototype in classes. 
    if (!password) { // catch empty string, undefined, null, false
      return false;
    }
    if (password.length < 8) {
      return false;
    }

    // This regex pattern makes sure that a provided string has at least 1 uppercase, 1 lowercase, and 1 number.
    const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$');

    if (!pattern.test(password)) { // what does the 'test' do? Its used with RegExp
      return false;
    }

    return true;
  };

};



module.exports = Validate;



/* NOTES: 

-when using classes, the '.prototype is added by default, as apoosed to adding them to the
  function Arithmetic() {} fx, then adding the methods inside with .prototype.
- what are regular expressions, RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$');? 
  ans: a way to match pattersn in a string. ex, the a-z, A-A, number string.

Questions: 
1. why are there if statements in the method? They are edge case to test against.
*/