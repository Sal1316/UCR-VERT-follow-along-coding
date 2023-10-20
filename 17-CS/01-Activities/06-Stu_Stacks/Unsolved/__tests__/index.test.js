const Stack = require("../index");

describe("Stack class", () => {
  // Variables for testing
  const inputArray = [1, 2, 3, 4];
  const testStack = new Stack(inputArray);
  const newItem = 5;

  test("Can instantiate a new stack with an empty argument", () => {
    const testStack = new Stack();
    expect(testStack).toEqual({ container: [] });
  });

  test("Can instantiate a new queue with an array argument", () => {
    expect(testStack).toEqual({ container: [1, 2, 3, 4] });
  });

  test("Can add a new element to the top of the stack", () => {
    stack.addToStack(newItem);
    expect(testStack).toEqual({ container: [1, 2, 3, 4, 5] });
  });

  test("Can remove items from the top of the stack", () => {
    const val = testStack.removeFromStack();
    expect(val).toEqual(5);
    expect(testStack).toEqual({ container: [1, 2, 3, 4] });
  });
});
