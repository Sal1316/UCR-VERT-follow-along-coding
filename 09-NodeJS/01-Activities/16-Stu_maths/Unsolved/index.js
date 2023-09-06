const maths = require('./maths');

const operation = process.argv[2]; /* right now the [2] is undefined, 
  we have to pass in the argument in the comand line first. Ex 'node index sum 1 2' returns 3 */

const numOne = parseInt(process.argv[3]); // pasrseInt is used to convert the string to a whole number.
const numTwo = parseInt(process.argv[4]);

switch (operation) {
  case 'sum':
    console.log(maths.sum(numOne, numTwo)); 
    break;
  case 'difference':
    console.log(maths.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(maths.product(numOne, numTwo));
    break;
  case 'quotient':
    console.log(maths.quotient(numOne, numTwo));
    break;
  default:
    console.log('Check your maths!');
}
 

/* Notes: 

- process.argv property is an inbuilt application programming interface 
  of the process module which is used to get the arguments passed to the 
  node.js process from the command line. 
  
- Note: The passed in arguments are all strings. Need to parse if you want 
  to use numbers.
  
  Ex, in CLI type > node index difference 3 2
  this passes 3 arguments in, the 'difference', '3', and '2' and saved to 
  their respective index. 
    
    The first two arguments are the node location and the index directory.
    process.argv[0] returns 'node location'
    process.argv[1] returns 'index directory'
    process.argv[2] returns 'difference'
    process.argv[3] returns '3'
    process.argv[4] returns '2'

*/ 