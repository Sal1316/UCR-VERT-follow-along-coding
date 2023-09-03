const ForumItem = require('./ForumItem.js');

class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn); // need super to access the properties of ForumItem.
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

module.exports = BlogPost;
