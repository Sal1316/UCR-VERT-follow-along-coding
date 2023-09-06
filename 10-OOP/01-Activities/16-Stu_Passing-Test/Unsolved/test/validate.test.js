const Validate = require('../validate.js');

describe('Validate', () => {
  describe('isPassword', () => {
  })
  test('returns false for password with length less than 8', () => {
    // arrange
    const validate = new Validate();
    // act
    const result = validate.isPassword('pass')
    // assert
    expect(result).toEqual(false);
  });

  test('returns false for password without a capital letter', () => {
    // arrange
    const validate = new Validate();
    // act
    const result = validate.isPassword('password') // all lowercase
    // assert
    expect(result).toEqual(false);
  });

  test('returns false for password without a lowercase letter', () => {
    const validate = new Validate();
    const result = validate.isPassword('PASSWORD') // all uppercase
    expect(result).toEqual(false);
  });

  test('returns false for password without a number', () => {
    const validate = new Validate();
    const result = validate.isPassword('Password')
    expect(result).toEqual(false);
  });

  test('returns true for a valid password', () => {
    const validate = new Validate();
    const result = validate.isPassword('Password123') // valid password
    expect(result).toEqual(true);
  });




});
