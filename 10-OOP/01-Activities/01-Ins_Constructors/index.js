// Example dog object made from scratch. Writing 100 of these from scratch would take a long time.
const dog1 = {
  name: 'Rex',
  age: 2,
  breed: 'Bulldog'
}

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function. Constructors create instances of the object.
function Dog(name, age, breed) {
  this.name = name; // this represents the obj that this keyword was created.
  this.age = age;
  this.breed = breed;
  this.nap = function () { // arrow fx will change the def when used in scope. that why we use defined fx.
    console.log('Zzzzzzzzz');
  };
  this.speak = function () {
    console.log(this.name + ' says woof')
  }
}

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const dog = new Dog('Rex', 2, 'Bulldog');
const dog2 = new Dog('toots', '4', 'pit');

// Calling dog's nap method
dog.nap();

dog.speak();
dog2.speak();

console.log(dog2); // logs the object made for toots.
