// TODO: What are we importing? the "fs" module from node standard library.
const fs = require('fs');

// fs. will give you a drop menu of all properties available

// appendFile() take 3 parameters, type of message/file, the index of where its at, and the function.
  //  first param >
  //  second param > the data you are trying to access. Can append to html files
  //  third param >
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => // append add the argument to the next array index.  the '\n' appends to a new line instead of right next to the last append. 
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!') // if err true, log error, else log 'commit logged'
);
