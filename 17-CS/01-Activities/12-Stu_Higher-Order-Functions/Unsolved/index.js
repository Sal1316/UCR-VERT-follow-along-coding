const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
  const sumVal = accumulator + currentValue;
  if (index === array.length - 1) {
    // last value
    return sumVal / array.length;
  }
  return sumVal; // should be 79.5
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage); // reduce basically reduces the values to a single value.

console.log("The grade average is: " + gradeAverage);

/* NOTES: 
- How are you able to pass in the findAverage arguemnts if there arent any provided?
  ans: .reduce(callbackFn, initialValue(optionla) ) - The reduce() method of Array instances executes 
  a user-supplied "reducer" callback function on each element of the array, in order, passing in the 
  return value from the calculation on the preceding element. 
  The final result of running the reducer across all elements of the array is a single value.
  	Syntax: .reduce(callbackFn, initialValue) where:
    	callbackFn - A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:
        1. accumulator- The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
        2. currentValue- The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1]. 
        3. currentIndex- The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.
        4. array-  The array reduce() was called upon.
      initialValue(optional)- a value to which the accumulatoris initialized the first time
      the callbac is called.



*/
