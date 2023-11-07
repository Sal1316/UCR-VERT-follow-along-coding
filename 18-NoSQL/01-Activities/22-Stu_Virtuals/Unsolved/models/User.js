const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('fullName').get(function(){// getter.
  return `${this.first} ${this.last}`;
}).set(function(value){// used to set properties that exist in the model.
  const fullNameSplit = value.split(' ');
  const [first, last] = fullNameSplit;
  this.set({ first, last });
})

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
