// 'use strict'
// In the browser, the keyword 'this' in the Global Execution Context is the window object
const globalThis = this;

// Declared function;
function myFuncA() {
  console.log("1. globalThis", globalThis);
  console.log("2. myFuncAThis", this);
  // since "this" was not assigned by the call, it will default to the global object
  console.log("3. 'this' boolena value: ", globalThis === this); // true.
}

myFuncA();

// Anonomose fx
const objB = {
  myFuncB: function () {
    console.log("4. globalThis", globalThis); // global window.
    console.log("5. myFuncBThis", this); // refrences the function object.
    // In the FEC, a new reference to this is created
    console.log("6. myFuncB: ", globalThis === this); // false
  },
};

objB.myFuncB();

/* NOTES: 

- 'this' always referes to the object that it belogs too.


*/
