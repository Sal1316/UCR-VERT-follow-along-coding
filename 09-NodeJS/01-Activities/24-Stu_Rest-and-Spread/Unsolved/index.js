// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? Spread
const newSongs = [...songs, "Baby got back"];

// TODO: What do you expect to be logged in the console? Copy of songs.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? it add the accumulated values.
  return array.reduce((a, b) => {  // (accumulator is a, currentValue is b) => accumulator + currentValue,
    return a + b
  }, 0); // reduce, takes an array of values and give you a mechanism to reduce it to one value.
};
// TODO: What do you expect to be logged in the console? 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? the rest operator.
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console? 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console? 110
console.log(additionSpread(1, 2, 3, 4, 100));
