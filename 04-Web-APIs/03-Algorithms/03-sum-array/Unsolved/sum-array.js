// ✅ Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
      console.log(arr)
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
      }
      console.log(sum)
      return sum;
};
