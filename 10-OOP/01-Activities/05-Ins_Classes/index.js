// Constructor class can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
// classes, are syntactic sugar. 
class Cat { // doing the same thing as constructor functions.
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  nap() { // fx go on the outside of the constructor.
    console.log('Zzzzzzzzz'); // lies on the 4th row. 
  }
}

// Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
const catOne = new Cat('Tom', 2, 'Shorthair');
const catTwo = new Cat('Garfield', 3, 'Bengal');

// Calling Cat's nap method
catOne.nap();
catTwo.nap();

console.log(catOne); // why is nap fx is missing in the console? Ans: because it wont be used intil it is refrenced or called. 
console.log(catOne);  