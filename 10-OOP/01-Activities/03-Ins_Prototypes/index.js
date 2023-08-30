/* Prototype methods on constructor function. 
- Every obj has a prototype and there is a link established between obj and prototype. 
Its an optomization we can make as developers.*/

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

/* w/ prototype, you can add the method 'nap' to the 'Dog' constructor fx. 
This method is then accessible to ALL instances created from the Dog constructor.*/
Dog.prototype.nap = function () { 
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log("1", dog); // by default the prototype does not appear on the console. you have to drill down to access it.
console.log("2", dog.nap); // will not display in the console but you know that it is there. you can save it to a const.
console.log("3", dog.__proto__); // __proto__ access the key, but the fx will not execute.

dog.nap(); // if accessing a fx you have to put parenthesis on the key.

