const Sequelize = require("sequelize");

// Create a connection object
const sequelize = new Sequelize(
  "library_db", // Database name
  "root", // User
  "Helifino", // Password
  {
    // Database location
    host: "localhost",
    dialect: "mysql", // the kind of DB you are working with.
    port: 3306,
  }
);

module.exports = sequelize;
