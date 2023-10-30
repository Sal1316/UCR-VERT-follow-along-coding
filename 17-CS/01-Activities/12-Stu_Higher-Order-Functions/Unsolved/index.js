const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
  const sumVal = accumulator + currentValue;
  if (index === array.length - 1) {
    return sumVal / array.length;
  }
  return sumVal; // should be 79.5
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage); // reduce basically reduces the values to a single value.

console.log("The grade average is: " + gradeAverage);
