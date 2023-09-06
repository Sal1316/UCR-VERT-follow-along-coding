console.log(process.argv);

var a = process.argv[2];
var b = process.argv[3];

console.log('a: ', a, 'b: ', b)
// compare: 
// if (a === b) {
//       console.log(true);
// } else {
//       console.log(false);
// }
// Or
const isBool = (a === b ? true : false);

// console.log("first argument:", a);
// console.log("Second argument:", b);
console.log("bool:", isBool);

/* Notes
- to access the argument you put in in the terminal, use index 2 and up.
- does not save. Its kind of like refresh after each run.



*/