// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities. 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // instance of connection to DB.

class Dish extends Model { } // Model imported in from sequelize.

Dish.init( // init is used to define the structure and configuration of a Sequelize model called 'Dish.' Same as .define().
  {
    id: { // attributes/colums id, dish_name, description, guest_name, has_nuts.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  { // this is the 'options object':
    sequelize, // specifies the 'sequelize connection to use for this model.
    freezeTableName: true, // when "true", it prevents Sequelize from pluralizing table names. Otherwise, "false" would pluralize them.
    underscored: true, //  column names in the database will use underscores instead of camelCase to separate words.
    modelName: 'dish', // sets the name of the model to 'dish'
  }
);

module.exports = Dish;
