const { Circle, Square, Triangle } = require('./lib/shapes')
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require('chalk');

const questions = [
      {
            type: "input",
            name: "text",
            message: chalk.green("Enter up to 3 characters"),
            default: 'ABC'

      },
      {
            type: "list",
            name: "textColor",
            message: chalk.green("Choose the text color!"),
            choices: ["red", "yellow", "green"],
            default: 'green'
      },
      {
            type: "list",
            name: "shape",
            message: chalk.green("Choose the shape!"),
            choices: ["circle", "rectangle", "triangle"],
            default: 'rectangle'
      },
      {
            type: "list",
            name: "shapeColor",
            message: chalk.green("Choose the shape color!"),
            choices: ["red", "yellow", "green"],
            default: 'yellow'
      }
]

function generateSvg() {
      inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {

            let Shape = 
                  shape == "circle" ? 
                        Circle : 
                  shape == "triangle" ?
                        Triangle :
                  Square;

            const shapeInstance = new Shape(text, textColor, shapeColor);
            const svgTemplate = shapeInstance.render();

            const fileName = "./examples/logo.svg";
            fs.writeFile(fileName, svgTemplate, (err) => {
                  err ? console.log(err) : console.log("Generated logo.svg");
            });
      });
}

generateSvg();