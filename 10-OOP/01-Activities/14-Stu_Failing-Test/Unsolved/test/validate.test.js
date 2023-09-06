const Validate = require("../validate.js"); // constructor fx 

// testing suite: 
describe("Validate", () => { // name it the same thing as the file or module you are testing, Validate test suite
      describe("isPassword", () => {
            test("returns false when passed an empty string", () => {   // 'it' and 'test' methods are the same   
                  // arrange
                  const validate = new Validate();

                  // act, perform the operation.
                  const results = validate.isPassword('');

                  // assert
                  expect(results).toEqual(false);
            });
      });
});

/* Notes
- 

*/
