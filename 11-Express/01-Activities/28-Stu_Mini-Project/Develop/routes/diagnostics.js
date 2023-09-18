const diagnostics = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// Constants:
const fileName = "./db/diagnostics.json";

// GET Route for retrieving diagnostic information
diagnostics.get("/", (req, res) => {
  readFromFile(fileName).then((data) => {
    res.json(JSON.parse(data)); // sends it back after its been parsed bc its a string.
  });
});

// POST Route for a error logging
diagnostics.post("/", (req, res) => {
  console.log(req.body);

  const { isValid, errors } = req.body;
  const payload = {
    time: Date.now(),
    error_id: uuidv4(),
    errors: errors,
  };

  if (!isValid) {
    // if false, then this code will run and we could do something with it.
    readAndAppend(payload, fileName);
    res.json(`DiAnostic infOrmation addEd `);
  } else {
    res.json({
      message: "ObjEct is vAlid, not lOgging. CHEck front End inplEmentAtion.",
      error_id: payload.error_id,
    });
  }

  res.json(req.body);
});

module.exports = diagnostics;
