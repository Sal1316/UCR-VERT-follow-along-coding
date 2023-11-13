const express = require("express");
const mongodb = require("mongodb").MongoClient;
// We import the ObjectId class from mongodb
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = "inventoryDB";

client
  .connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });

app.use(express.json());

app.post("/create", (req, res) => {
  // Working...
  // The title and author will be provided by the JSON request body with Insomnia
  db.collection("bookCollection")
    .insertOne({ title: req.body.title, author: req.body.author })
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/read", (req, res) => {
  // Working...
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

// TODO: Add Delete route that uses a filter to delete a single document by id. -- Done
app.delete("/delete/:id", (req, res) => {
  const bookId = new ObjectId(req.body.id); // gets the id from request body in the url and converts it to mongoDb id format.

  db.collection("bookCollection")
    .deleteOne({ _id: bookId })
    .then((results) => {
      res.json(results)
      res.send(results.deletedCount ? 'Document deleted' : 'No document found!')
    })
    .catch((err) => {
      if (err) throw err;
    });
});
