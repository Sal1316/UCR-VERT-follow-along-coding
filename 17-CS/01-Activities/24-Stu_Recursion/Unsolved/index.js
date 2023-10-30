// TODO: Add a comment describing what the `position` parameter means for this function.
// ans: this means that the numbers at that index.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // ans returns the 1 since that position is only 1.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // ans: this is just adding the previous numbers together.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// ans: 34;
console.log(fibonacci(9));
