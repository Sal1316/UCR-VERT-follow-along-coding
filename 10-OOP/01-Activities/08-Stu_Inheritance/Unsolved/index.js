// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem { // the base class
  constructor(authorName, text) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = new Date();
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text) {
    super(authorName, title, text); // super is calling the constructor from the ForumItem. Like the .call method
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, title, text) {
    super(authorName, title, text); // super is calling the constructor from the ForumItem
    // this.authorName = authorName: // super takes the place of the below.
    // this.title = title;
    // this.text = text;
    // this.createdOn = createdOn;
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment('Sal', 'this comment', 'dogs are cool', 'emojis')
// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost('SalCe', 'this post', 'my 4th poxt')

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newComment);
console.log(newPost);