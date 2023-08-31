class Validate {
  isPassword(password) { // 
    if(!password) { // catch empty string, undefined, null, false
      return false;
    }
    if(password.length < 8) {
      return false; 
    }
     
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$');

    if (pattern.test(password)) {
      return true;
    }
   
    return true; 
  };

};



module.exports = Validate;
// when using classes the prototype is added by default. 
// what are regular expressions? they create a pattern match to check against
