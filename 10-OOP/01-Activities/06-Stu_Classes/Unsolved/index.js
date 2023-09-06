class BlogPost { // doing the same thing as constructor functions.
      constructor(authorName, title, text) {
            this.authorName = authorName; // means for this instance of the obj add the author name.
            this.title = title;
            this.text = text;
            this.createdOn = new Date();
            this.comments = [];
      }
}

BlogPost.prototype.addComent = function () {
      this.comments.push(comment);
};
BlogPost.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
};
BlogPost.addComment = function (comment) {
      this.comment.push(comment)
}

class Comment {
      constructor(authorName, text, createdOn, reaction) {
            this.authorName = authorName;
            this.text = text;
            this.createdOn = createdOn;
            this.reaction = reaction;
      }

      printMetaData() {
            console.log(`Created by ${this.authorName} on ${this.createdOn}`)
      }
}

const newComment = new BlogPost(
      "Sal",
      "myu super post",
      "both dogs are arlight",
      "8/28/23"
);
const newPost = new BlogPost(
      "Pepe",
      "myu super post",
      "cats, ewww",
      "8/28/23"
);



newPost.printMetaData();
newComment.printMetaData();

console.log(newPost);