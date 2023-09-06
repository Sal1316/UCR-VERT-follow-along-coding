// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.sum(2, 2)).toEqual(total);
    });
  });
});


/* NOTES: 
 - why are there two describe fx's?
    ans: the reason that thre are two describe fx's is bc they are there to organized the code.
         they are wrappers that produce a specific output. the outer most level is usually the module/object that you are testing 
         and the inner one is the name of the method you are testing. In our case, the 'Arithmatic' matches the imported constructor,
         and the 'sum' matches the method inside that module. It doesnt have to be this way, but it more organized when it displays 
         in the console with your test results.
    
    describe('Arithmetic', () => {  // Arithmatic is the main fx
      describe('sum', () => {       // sum is the sub function.
        it('what you want it to do', () => { // test
          const total = 4;
          const arithmetic = new Arithmetic(); // You have to instantiate the constructor fx with new.
          expect(arithmetic.sum(2, 2)).toEqual(total);  // expect(fx call.matcher) is the test, and .toEqual is what you expect the outcome to be.
        });
      });
    });

*/ 