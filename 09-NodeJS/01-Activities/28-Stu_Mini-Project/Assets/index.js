const inquirer = require("inquirer");
const fs = require("fs");

function createHtml(answers) { // can destructure inside the parameter too. Pass this { name, location, bio, linkedInUrl, gitHubUrl } 
  const { name, location, bio, linkedInUrl, gitHubUrl } = answers;
  return `
  <!DOCTYPE html>
  <html lang="en">
    
  <head>
    <meta charset="UTF-8" />
    <title>mod 9 mini</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  
  </head>
  
  <body>
    <div class="container">
      <header class="header">
        <h1 id="name">${name}</h1>
        <h2 id="location">${location}</h2>
      </header>
      <section id="information">
            <p id="bio">${bio}</p>
            <p id="linkedIn">${linkedInUrl}</p>
            <p id="github">${gitHubUrl}</p>
      </section>
    </div>
  

    <!--  -->
    <!-- Added link to the jQuery library -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="./Assets/index.js"></script>
  </body>
  
  </html>
  `
}

const questions = [
  {
    type: "input",
    name: "name",
    message: "what is your name?",
    validate: (answer) => {
      // validate passes a function that check to see that the input data was provided/correct.
      if (answer === "") {
        return "please enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "location",
    message: "where are you located at?",
    validate: (answer) => {
      // validate passes a function that check to see that the input data was provided/correct.
      if (answer === "") {
        return "please enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "bio",
    message: "what is your Bio?",
    validate: (answer) => {
      // validate passes a function that check to see that the input data was provided/correct.
      if (answer === "") {
        return "please enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "linkedInUrl",
    message: "what is your LinkedIn url?",
    validate: (answer) => {
      // validate passes a function that check to see that the input data was provided/correct.
      if (answer === "") {
        return "please enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "gitHubUrl",
    message: "what is your GitHub url?",
    validate: (answer) => {
      // validate passes a function that check to see that the input data was provided/correct.
      if (answer === "") {
        return "please enter a valid name!";
      }
      return true;
    },
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers); // once the user finishes every single question, we will get a promise (.then) with the answers obj.
    const htmlPageContent = createHtml(answers);

    fs.writeFile("index.html", htmlPageContent, (err) => {
      err ? console.log(err) : console.log("successfully created index.html page.")
    })
  });
