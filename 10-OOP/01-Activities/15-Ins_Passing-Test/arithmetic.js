// A constructor Arithmetic is created.
function Arithmetic() {}

// Constructor Arithmetic is given a sum method that returns two numbers added together.
Arithmetic.prototype.sum = (a, b) => {
  return a + b;
};

// subtracted.
Arithmetic.prototype.difference = (a, b) => {
  return a - b;
};

// multiplied together.
Arithmetic.prototype.product = (a, b) => {
  return a * b;
};

// divided.
Arithmetic.prototype.quotient = (a, b) => {
  return a / b;
};

// remainder
Arithmetic.prototype.modulus = (a, b) => {
  return a % b;
};

// Constructor Arithmetic is exported from the file.
module.exports = Arithmetic;
