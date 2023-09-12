const Shape = require('./lib/shape')
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require('chalk');


const questions = [
      {
            type: "input",
            name: "text",
            message: chalk.green("Enter up to 3 characters")
      },
      {
            type: "list",
            name: "textColor",
            message: chalk.green("Choose the text color!"),
            choices: ["red", "yellow", "green"]
      },
      {
            type: "list",
            name: "shape",
            message: chalk.green("Choose the shape!"),
            choices: ["circle", "rectangle", "triangle"]
      },
      {
            type: "list",
            name: "shapeColor",
            message: chalk.green("Choose the shape color!"),
            choices: ["red", "yellow", "green"]
      }
]
const generateSvg = ({ text, textColor, shape, shapeColor }) => {
      let shapeReasigned = '';

      if (shape === 'rectangle') {
            shapeReasigned = 'rect';
      }
      else if (shape === 'triangle') {
            shapeReasigned = 'polygon';
      } else {
            shapeReasigned = 'circle';
      }
      console.log("shape === ", shape)

      if (shape === 'circle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shapeReasigned} cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`
      } else if (shape === 'rectangle') { // square
            return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <${shapeReasigned} x="50" y="50" width="200" height="200" fill="${shapeColor}" />
      <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`
      } else { // triangle
            return `<svg version="1.1" width="900" height="500" xmlns="http://www.w3.org/2000/svg">
      <${shapeReasigned} points="200,150 80,380 320,380" fill="${shapeColor}" />
      <text x="200" y="325" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`
      }
}

function init() {
      inquirer.prompt(questions).then((answers) => {
            console.log("Answers: ", answers);
            // const svgTemplate = generateSvg(answers);

            const shapeInstance = new Shape(text, textColor, shape, shapeColor);
            const svgTemplate = shapeInstance.render();

            const fileName = "./examples/logo.svg";
            fs.writeFile(fileName, svgTemplate, (err) => {
                  err ? console.log(err) : console.log("Generated logo.svg");
            });
      });
}

init();