const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) {
      return i;
    }
  }
  return -1; // need to be outside because you want this executed after checking all numbers
};

module.exports = {
  linearSearch,
};
