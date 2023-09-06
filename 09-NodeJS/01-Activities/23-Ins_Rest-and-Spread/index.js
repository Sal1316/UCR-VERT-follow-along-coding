// added ...rest
function add(x, y, ...rest) {
  console.log(rest)
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // by defauls, the other 3 params are ignored.

console.log('\n================================================\n');


// 1. rest parameters: adds many numbers to the array numbs if not specified in the params. but must be the last number 
function addRest(...nums) {// allows you to pass a variable amount of parameters.
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

console.log(addRest(1))
console.log(addRest(1)); // => 1
console.log(addRest(3, 3)); // => 6
console.log(addRest(1, 1, 4, 5)); // => 11

// 2. 
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]


const person = { first: "Sal", last: "ceja" }
const hobbies = { activity1: "racing", activity2: "coding" }

const personWithHobbies = { ...person, ...hobbies }; //the spread operator (...) creates a copy of the objects..
console.log("copy", personWithHobbies);