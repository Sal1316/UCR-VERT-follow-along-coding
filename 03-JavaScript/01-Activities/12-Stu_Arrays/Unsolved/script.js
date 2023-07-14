// WRITE YOUR CODE HERE
var names = ["Sal", "Mace", "Bobby"]

console.log("total number of elements is, " + names.length);

console.log("welcome to the class " + names[0]);
console.log("welcome to the class " + names[1]);
console.log("welcome to the class " + names[2]);

names[0] = "Dolfin";

if(names[0] !== "Sal") {
      console.log( names[0] + " is now in the class");
}