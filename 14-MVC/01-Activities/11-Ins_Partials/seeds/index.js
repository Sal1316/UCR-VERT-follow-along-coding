const sequelize = require("../config/connection");

//importing seeding data.
const seededGallery = require("./galleryData"); // why dont they use .js at the end? they are not required. Everything work fine without.
const seedPaintings = require("./paintingData.js");

const seedAll = async () => {
  await sequelize.sync({ force: true }); // this is usually done before seeding any data. like DROP database if EXISTS in sql.

  await seededGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();

/* NOTES: 

- What uses this index.js file?
   ans: Used when your run 'npm run seeds', which in turn executed this index.js file
   
- await sequelize.sync({ force: true }); // what does this do?
   ans: syncronizes your applicaton model with the DB. The force: true, is an option that 
      that drops all existing tables in the DB and recreates them according to the model
      definitions. This way you start with a fresh database schema.
   
   
*/
