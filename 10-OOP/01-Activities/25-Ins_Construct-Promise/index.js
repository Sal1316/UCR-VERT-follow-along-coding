// Creating our own promise. 
// function 'wait()' is scaled to return a new promise
const wait = () => {
  return new Promise((resolve, reject) => {
    // a timeout of 3 seconds is initialized
    setTimeout(() => {     // after 3 seconds a random number is generated
 
      const randNum = Math.floor(Math.random() * 100); // number between 0 and 100
      
      if (randNum % 2 === 0) {// if the random number is even the 'resolve()' sends data through to the '.then()' of the promise
        resolve(`Success! Even number ${randNum} generated`);
        
      } else {// if the random number is odd the 'reject()' sends data through to the the '.catch()' of the promise
        reject(new Error(`Oops! Odd number ${randNum} generated`));
      }
    }, 3000);
  })
}

// execution of the 'wait()' function promise
wait()
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // 


/* NOTES:
- in the .then and .catch fucntions, how does it know if its a success or an error? 
  ans: it knows bc it picks up the resolve(), and reject() methods.

- when creating your own promise fx, you need to use the Promise(),
  constructor along with the resolve(), and reject() methods. Together,
  they give you the right syntax for your own Promise method.

*/