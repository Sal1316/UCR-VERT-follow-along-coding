// A constructor Arithmetic is created.
function Arithmetic() {};

// Constructor Arithmetic is given a sum method that returns two numbers added together.
Arithmetic.prototype.sum = (a, b) => {
  return a + b
};

// Constructor Arithmetic is given a difference method that returns two numbers subtracted.
Arithmetic.prototype.difference = (a, b) => {
  return a - b
};

// Constructor Arithmetic is given a product method that returns two numbers multiplied together.
Arithmetic.prototype.product = (a, b) => {
  return a * b
};

// Constructor Arithmetic is given a quotient method that returns two numbers divided.
Arithmetic.prototype.quotient = (a, b) => {
  return a / b
};

// Constructor Arithmetic is given a modulus method that currently doesn't do anything.
Arithmetic.prototype.modulus = (a, b) => {
  // return a % b;  // should fail
}

// Constructor Arithmetic is exported from the file.
module.exports = Arithmetic;



/* Notes

  In the provided code, each method (e.g., sum, difference, product, quotient, modulus) 
  is added to the Arithmetic constructor's prototype using the .prototype property. 
  This is a common way to define methods for a constructor function in JavaScript. 
  
  Let's break down why the .prototype property is used here:

  1. Defining Methods on the Prototype:
    When you define a method on the prototype of a constructor function, 
    it becomes available to all instances created from that constructor.
    This means that each instance of Arithmetic will share the same method implementations 
    defined on its prototype. This is more memory-efficient than defining the methods on 
    each individual instance.
  
  2. Arrow Functions as Method Definitions:
    The code uses arrow functions to define these methods. Arrow functions have some specific 
    behavior in JavaScript, one of which is that they do not bind their own this. Instead, 
    they inherit the this value from the surrounding lexical context. In the context of 
    prototype methods, using arrow functions in this way can lead to issues with this binding, 
    as they will not have access to the instance-specific properties or methods. However, 
    in this specific code, since the methods don't rely on the instance-specific properties
    or methods, using arrow functions is acceptable.
  
  3. Exporting the Constructor:
    Finally, the module.exports statement is used to export the Arithmetic constructor so that it 
    can be used in other parts of your program. It's worth noting that while using arrow functions 
    for prototype methods is valid and can work in certain cases, it's not a recommended practice 
    for methods that need access to instance-specific properties or methods. In such cases, 
    regular function expressions are typically used to ensure proper this binding within the methods. 
    Arrow functions are better suited for cases where the method does not rely on instance-specific context.


*/