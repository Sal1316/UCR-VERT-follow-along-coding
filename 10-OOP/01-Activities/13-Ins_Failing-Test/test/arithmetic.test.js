// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js'); // imort the file

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => { 
  describe('modulus', () => { 
    it('should take two numbers, divide them, and return the remainder', () => { 
      // arrange data
      const total = 0;
      const arithmetic = new Arithmetic(); // you hav e to instanciated it to use it.

      //act 
      const result = arithmetic.modulus(2, 2); // this modulus matches the on in describe fx.

      // assert that result is what I expect it to be.
      expect(result).toBe(total);
    });
  });
});


/* NOTES:
- outer wrappers produce a specific output, ex file name/module name is 'Arithmatic'

*/