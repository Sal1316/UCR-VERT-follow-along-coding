const http = require('http');

// TODO: What does this function return? returns an api call to an endpoint.
// ans: asyncRequst returns a promise
const asyncRequest = (url) =>
  new Promise((resolve, reject) => { // creating a Promise wrapper around the http.get().on() mothod.
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => { // event listener for the error.
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // Calling reject will reject the promise with the error. This executes the cb in the asyncRequest().catch(cb)
          reject(error);
        } else {
          // TODO: What does the following line do?
          resolve(rawData);// the rasData. This executes cb in 'asyncRequest().them(cb)'.
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // The callback function passed to .then() is called when the resolve parameter is calle din the Promise 
  .then((data) => console.log(data))
  // The callback function passed to .catch()  is called when the reject parameter is calle din the Promise 
  .catch((error) => console.log(error));


  /* NOTES: 
  - theres lots of ways to make network request: 
    in the past we use, jquery ajax, fetch and now we are using nodes, http.get(). Only use if you need fine tuned control.
  
  */ 