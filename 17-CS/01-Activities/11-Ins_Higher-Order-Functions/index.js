const arrayIndex = [1, 52, 35, 6, 72, 7, 3, 19, 32, 54, 78, 95, 97];

function evenIndexMultiplier(number, index) {
  // Checking to see if we are on an even index inside of the array we are mapping through.
  if (index % 2 === 0) {
    // Multiply the number on the even index by 10.
    return number * 10;
  }

  // Return the number if it is on an odd index.
  return number;
}

const evenIndexes = arrayIndex.map(evenIndexMultiplier);

console.log(evenIndexes);

/* NOTES:

- How are we able to map the function evenIndexMultiplier() if there are no arguments passed in?
  ans: The map() method, by default, passes the current element as the first argument (number) 
  and the index of the current element as the second argument (index) to the provided function
  on each iteration.
  The map() method knows what the next index is because it internally manages the iteration 
  and passes the index as an argument to the callback function on each iteration, regardless
  of whether the function explicitly takes the index as a parameter.

- .map(callback, thisArg) syntax:
  callback - 

*/
