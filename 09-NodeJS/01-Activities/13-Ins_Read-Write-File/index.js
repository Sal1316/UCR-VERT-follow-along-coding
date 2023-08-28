// fs is a Node standard library package for reading and writing files ?
const fs = require('fs'); // same thing a linking js file to html.  'fs' module built in to node.

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (error, data) => // 'data.csv' is in the same directory so no ./ needed.
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log.txt', process.argv[2], (err) => // creates file called log.txt. need to add it in terminal with node index "Hello World". this is argv[2]
  err ? console.error(err) : console.log('Success!') // warning, you overwrite the text that is in with this fx.
);
