const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` that will be the subdocument --done.
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema], // represent the bookSchema as an array.
  lastAccessed: { type: Date, default: Date.now },
});

// Here the model is compiled from the librarySchema.
const Library = mongoose.model("Library", librarySchema);

const booksData = [
  { title: "How to make Books", price: 80000 },
  { title: "Why books are made", price: 30 },
  { title: "Who makes books", price: 90 },
];

Library.create({ name: "Books", books: booksData })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

module.exports = Library;
