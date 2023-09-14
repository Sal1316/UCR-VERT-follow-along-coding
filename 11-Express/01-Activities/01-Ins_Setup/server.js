
const express = require('express');// Import Express.js
const path = require('path'); 
/* Import built-in Node.js package 'path' to resolve path of files that are located 
   on the server Path, can be used to construct an absulute path our of two relative 
   path by combining __dirname and 'public/routes.html' for example.*/ 
   
const app = express(); // Initialize an instance of Express.js


const PORT = 3001; // Specify on which port the Express.js server will run, 3001 is usually the default


app.use(express.static('public'));// with this code, we are now ready to serve static files from the public folder to the client.

app.get('/', (req, res) => res.send('This message is not displaying in the home page...Navigate to /send or /routess'));
/* 
  - by default the '/' is looking for an index.html file within the PUBLIC folder.
  - res.send() is used to send a response back to the client. In this case, it sends the string 
   'Navigate to /send or /routes' as the response, but its not showing up anywhere.
*/

app.get('/send', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
  // console.log('__dirname', __dirname)
});
/* 
- what this is saying is that when client enter the subdirctory '/send,' we execute the GET request and send a file('sendFile.html') to the client
- .join just adds to the path url.
- whats '__dirname'? 
  ans: __dirname is equal to > C:\bootcamp\UCR-VIRT-Follow-along-coding\11-Express\01-Activities\01-Ins_Setup. Looks like its the file that was scoped with the terminal.
    dirname is a predifined global variable in Node.js that represents the directory name of the current module(JavaScript file). 
    It refers to the absolute path of the directory where the currently executing script is located.
*/

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port. take 2 parameters.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


/*  NOTES:

- what are the (req, send) parameters for?
  ans: the 'req'(request object) and the 'res'(response object) and the arrow fx are callback fx that gets executed 
    when get request is made to the root path.

- the express.static('public') is a middleware by express.js itself. it serves up static files, 
   such as HTML, CSS, and JS, Images, and other assets to the client (browser) directly from the specified directory. 
   eed to give express permission to read files first. How?

- what is the 'app.use(express.static('public'))' line of code doing?  
 ans: it sets up a middleware in an Express.js application. 
 This middleware is responsible for serving static files, such as HTML, CSS, JavaScript, images, and other assets, to 
 the client (browser) directly from the specified directory, which in this case is the 'public' directory.
  + the use() adds the static middleware to the express.js applications. 
  + the express.statis() is cofigured to serve file.
  + In summary, app.use(express.static('public')) allows your Express.js application to serve static files from 
    the 'public' directory to clients, making it easy to provide the frontend components of your web application.



*/