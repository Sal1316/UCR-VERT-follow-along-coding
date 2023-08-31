const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  describe('constructor', () => {
    test('should throw error when authorname is < 2 characters', () => { // modifiers test.only, test.todo, test.skip
      // arrange
      const err = new Error("Author must be at least 3 characters long.") 
      
      // act
      const cb = () => new BlogPost('j');

      // assert 
      expect(cb).toThrowError(err);
    })

    test('should throw error when authorname is < 2 characters', () => { // modifiers test.only, test.todo, test.skip
      // arrange
      const err = new Error("Author must be at least 3 characters long.") 
      
      // act
      const cb = () => new BlogPost('{Sal Ceja}');

      // assert 
      expect(cb).toThrowError(err);
    })
  
  })

});
