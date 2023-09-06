// Creating and throwing your own Errors: 

class Arithmetic {
  constructor(num1, num2, operator) { // we are constructing this class
    
    // Checks to see that both numbers being passed in are of type number. If not, throw an error.
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error('Please enter numbers for calculation'); // the error surfaces back to the user.
    };
    
    this.num1 = num1; // same as 'num1': num1.value ex, 2
    this.num2 = num2;
    this.operator = operator;
  }
};

module.exports = Arithmetic;


//  to use this one, 'node index' and hit enter