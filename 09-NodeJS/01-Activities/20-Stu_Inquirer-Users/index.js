const inquirer = require('inquirer');
const fs = require('fs'); // file system module

inquirer
  .prompt([ // array of objects that configures the prompts you want to ask.
    {
      type: 'input',
      name: 'username',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['html', 'Css', 'js']
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekenisis']
    },
  ])
  .then((response) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'),)

  });