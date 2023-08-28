// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[0]); //node location
// console.log(process.argv[1]); //location of the file that was used to run the index.
console.log(process.argv[2]);

// import { argv } from 'node:process';

// // print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });




/* NOTES: 
passing arguents into the node command > 

node index hello world // add two additional strings, 'hello', 'world', at index 2 and 3.
node index "hello world" // add one additional string. 'hello world', at index 3.
*/ 