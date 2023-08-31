const Validate = require('../validate.js');

describe('Validate', () => {
  describe('isPassword')
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
    const result = validate.isPassword('password')
    // assert
    expect(result).toEqual(false);
  });

  test('returns false for password without a lowercase letter', () => {
    // arrange
    const validate = new Validate();
    // act
    const result = validate.isPassword('PASSWORD')
    // assert
    expect(result).toEqual(false);
  });

  test('returns false for password without a number', () => {
    // arrange
    const validate = new Validate();
    // act
    const result = validate.isPassword('Password')
    // assert
    expect(result).toEqual(false);
  });

  test('returns true for a valid password', () => {
    // arrange
    const validate = new Validate();
    // act
    const result = validate.isPassword('Password123')
    // assert
    expect(result).toEqual(false);
  });
});
