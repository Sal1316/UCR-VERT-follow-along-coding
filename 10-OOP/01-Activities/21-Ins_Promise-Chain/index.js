const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({ // promise 1
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  // promises are chained to directly pass inquirer data into fetch request
  .then((res) => fetch(`https://api.github.com/users/${res.username}`)) // fetch is promise 2
  // promises are chained to parse the request for the json data
  .then((res) => res.json()) // json is promise 3
  // json data is accepted as user and logged to the console
  .then((user) => console.log(user));

/* NOtes 
- what is a promise? it is something that gets returned from methods,
  promise > after the promise has been fulfiled/returned, you are given access to the .then()

  Promise states:
    pending
    fulfilled
    rejected
  
- what is chaining/
  it is attaching .then() methods one after another. They are required to return a promise in order to be chained.
  */