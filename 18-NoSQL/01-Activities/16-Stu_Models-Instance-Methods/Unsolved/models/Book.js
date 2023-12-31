const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` -- DONE.
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: String, required: true },
});

// TODO: Create a custom instance method named `getDiscount` -- Done.
bookSchema.methods.getDiscount = function () {
  // The 'this' keyword is used to specify the properties belonging to the particular instance
  const discountPirce = this.price * 0.5;

  console.log(
    `The title is: ${this.title}, and the discounted price is: ${discountPirce}`
  );
};
// TODO: Create a model named `Book` -- Done.
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model -- Done
const discountedBook = new Book({
  title: "How to Write a Book",
  price: 3000,
});

// TODO: Call the custom instance method on the instance -- Done.
discountedBook.getDiscount();

module.exports = Book;
