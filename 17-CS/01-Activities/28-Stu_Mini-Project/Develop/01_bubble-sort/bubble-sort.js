// Create our input data
const unsortedInputArray = [2, 42, 100, 23, 500, 34];

// seed data in unsortedInputArray
array.push(Math.round(Math.random() * 2000));

// TODO: create bubble sort function
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        temp = array[j + 1];
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
