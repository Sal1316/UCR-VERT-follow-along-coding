const inquirer = require('inquirer');
const fetch = require('node-fetch'); // 

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  .then((res) => fetch(`https://api.github.com/users/${res.username}`)) // fetch technically succeds even though the url is bad. You have to check in the res.json() to see what returned. ex, 404 error.
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch((err) => {  // by default, this wont be use unless there is an error. ex, bad url, no json ...
    console.log("An UnExpected ServeR ErroR OCCured.")
    console.log(err)
  });
