const mongoose = require('mongoose');

// this is creating a schema for the book collection.
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String, // shorthand notation as above.
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// mongoose.modle() to compoite a modled based on the schema 'bookschema'
const Book = mongoose.model('Book', bookSchema);

const handleError = (err) => console.error(err);

// creates a new instance of the model, a document/
Book
  .create({
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

// Create a new instance with only the requird title and optional author properties.
Book
  .create({
    title: 'Oh the Places You Will Go!',
    author: 'Dr. Seuss'
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

// Creating a book with only the req title property.
Book.create({ title: 'Harold and the Purple Crayon' })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

module.exports = Book;
