const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  describe('constructor', () => { // we dont really need another describe here bc we are testing the constructor but we have one.
    test('should throw error when authorname is < 2 characters', () => {
      /* test modifiers ex, test.only > can be added to your test to test only that one if it had 100 tests.
         test.todo > test still need to be implemented, 
         test.skip > skips certain tests. */

      // arrange & act
      const err = new Error("Author must be at least 2 characters long.")

      // act
      const cb = () => new BlogPost('sal'); // cb functions only responsibility is to instanciate the object.

      // assert 
      expect(cb).toThrowError(err);
    })

    // test.todo > must be called only with the description ex, test.todo("should thow error...")
    test('should throw error when authorname provided is an invalid character (not uppercase, lowerecase, dashes, and undersocre)', () => {
      const err = new Error("Author must only contain letters, numbers, dashes, and underscores.")
      const cb = () => new BlogPost('{Sal Ceja}');
      expect(cb).toThrowError(err);
    })

  })

});
