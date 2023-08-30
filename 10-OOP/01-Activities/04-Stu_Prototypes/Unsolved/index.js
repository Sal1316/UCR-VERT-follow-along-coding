// TODO: Add a comment describing what kind of function this is. CONSTRUCTOR
// Prototypes: two main purposes, optomization and how javacript accomplishes inheritance.
function BlogPost(authorName, title, text, createdOn) { //blueprint of what the obj should look like.
  this.authorName = authorName; // means for this instance of the obj add the author name.
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration.
// by using the prototype keyword, addComment gets shared accross all instance of the obj. 
BlogPost.prototype.addComent = function (comment) { // NOT SURE HOW THIS IS WORKING. IS THERE A KEY NAMED ADDCOMMENT THAT IS EMBEDED IN THE CONSTRUCTOR?
  this.comments.push(comment);
};
BlogPost.prototype.printMetaData = function () {
  console.log(`Created by ${this.authorName} on ${this.createdOn}`);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super ugly!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');


console.log(post); // logsl the newly created BlogPost object.
console.log(post.comments); // logs: [ 'Nice post, I like it!' ]
post.printMetaData(); // logs: Created by John Doe on 12/16/2021
console.log(post.toString()); // [object Object]
