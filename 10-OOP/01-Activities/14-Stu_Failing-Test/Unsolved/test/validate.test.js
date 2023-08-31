const Validate = require("../validate.js"); // constructor fx 

// testing suite: 
describe("Validate", () => {
      describe("isPassword", () => {
            test("returns false when passed an empty string", () => {   // 'it' method are the same   
                  // arrange
                  const validate = new Validate();

                  // act
                  const results = validate.isPassword('');

                  // assert
                  expect(results).toEqual(false);
            });
      });
});

/* Notes
- 

*/
