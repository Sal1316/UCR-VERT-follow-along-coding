// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;

  return {
    increment: () => {
      return ++count; // it increments it first. Pre increemnt (++count), as apposed to post increment (count++)
    },
  };
}

module.exports = counter;
