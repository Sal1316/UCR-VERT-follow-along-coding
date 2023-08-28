
// TODO: Import `maths.js`
const operations = require('./maths.js'); // need to use relative paths.

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const op = process.argv[2];
const a = parseInt(process.argv[3]);// numbers come in as string, so convert to int. Logs in yellow.
const b = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (op) {
      case "sum":
            console.log(operations.sum(a, b));
            break;
      case "difference":
            console.log(operations.difference(a, b));
            break;
      case "product":
            console.log(operations.product(a, b));
            break;
      case "quotient":
            console.log(operations.quotient(a, b));
            break;
      default:
            console.log("Invalid Operation!");
            break;
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
