// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const grocerySchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: Number,
});

// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Item = mongoose.model('Item', grocerySchema);

// Will add data only if collection is empty to prevent duplicates
Item.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedItems = await Item
          .insertMany([
            { item: 'banana', price: 1 },
            { item: 'pear', price: 2 },
            { item: 'apple', price: 3 },
            { item: 'ice cream', price: 5 },
            { item: 'bread', price: 2 },
            { item: 'cheddar cheese', price: 4 },
            { item: 'hot dogs', price: 8 },
            { item: 'lettuce', price: 2 },
            { item: 'snack cake', price: 4 },
            { item: 'wine', price: 10 },
          ]);
        console.log('Inserted items:', insertedItems);
      } catch (insertedError) {
        console.log(insertError);
      }
    }
  });

module.exports = Item;
