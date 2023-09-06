/*TODO: Create a constructor function called 'BlogPost' that takes in 
'authorName', 'title', 'text, and 'createdOn'*/
function BlogPost(authorName, title, text) {
      this.authorName = authorName; // constructor syntax requires 'this' keyword.
      this.title = title;
      this.text = text;
      this.createdOn = new Date(); // not in args but can be refrenced when needed.
      this.printMetaData = function () { // need to be an annonomous fx to work.
            console.log(`Created by ${this.authorName} on ${this.createdOn}`);
      };
}

const post = new BlogPost("Bob", "Title", "Text");

post.printMetaData();
// why does the printMetaData display in the console if we didnt log it?
// ans: bc we are exeting here and there is a log inside of printMetaData.
