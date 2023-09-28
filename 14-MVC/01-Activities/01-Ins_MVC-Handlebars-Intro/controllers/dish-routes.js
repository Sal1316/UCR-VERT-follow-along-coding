const router = require("express").Router(); // This line imports the Express.js Router module, allowing you to define routes like get, put, post...
const path = require("path"); // helps construct paths. Can join routes by going up or down the path directory to make the path work.

// This is the 'get' route
router.get("/", async (req, res) => {
  // Here, index.html is rendered
  console.log("__dirname:::", __dirname);
  console.log("path: ", path.join(__dirname, "../views/index.html"));
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;

/*NOTES: 

 __direname > is a special variable in Node.js that represents the directory name of the current module. 
        this is the absolute directory crom the C: to the file you scoped a 
      logs: __dirname::: C:\bootcamp\UCR-VIRT-Follow-along-coding\14-MVC\01-Activities\01-Ins_MVC-Handlebars-Intro\controllers
      logs: path:  C:\bootcamp\UCR-VIRT-Follow-along-coding\14-MVC\01-Activities\01-Ins_MVC-Handlebars-Intro\views\index.html

 
 
 */
