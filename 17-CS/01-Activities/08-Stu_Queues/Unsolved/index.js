// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(value = []) { // if no value is passed, it uses the empty array by default.
    this.container = value;
  }

  // adds an element to the back of the queue
  addToQueue(el) {
    return this.container.push(el);
  }

  // removes an element from the front of the queue
  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
