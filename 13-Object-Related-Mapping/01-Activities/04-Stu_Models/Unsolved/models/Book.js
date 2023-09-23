const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true, // say to sequalize, hey the table name is going to be book too.
    modelName: 'book',
  }
);

module.exports = Book;
