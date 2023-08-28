const pie = 'apple';

const predictable = () => 1;

const markup = 1.10;
const calculateValue = (value) => {
  return value*markup;
}

// module.exports is an object we use to store variables or methods.
module.exports = { // have to export them to be able to use in other.
  pie, // key and vallue are the same. 
  predictable,
  cake: 'chocolate',
  calculateValue // so you dont have the users acces the mark up value since it is not shows. For examle, private members of a club.
};
