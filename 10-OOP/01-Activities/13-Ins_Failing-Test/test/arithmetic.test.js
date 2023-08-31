// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js'); // imort the file

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => { // wrappers that produce a specific output, ex file name
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe('modulus', () => { // name or fx that you are testing.
    it('should take two numbers, divide them, and return the remainder', () => {
      // arrange 
      const total = 0;
      const arithmetic = new Arithmetic();

      //act 
      const result = arithmetic.modulus(2, 2);

      // assert
      expect(result).toEqual(total);
    });
  });
});
