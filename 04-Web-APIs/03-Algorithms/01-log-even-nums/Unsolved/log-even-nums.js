// ✅ Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number
var logEvenNums = function (num) {
  var evenArr = [];
  
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
};

console.log("my even numbers are: " + logEvenNums(4));