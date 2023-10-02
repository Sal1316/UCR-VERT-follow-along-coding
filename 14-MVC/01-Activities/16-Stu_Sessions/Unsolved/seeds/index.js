const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true }); // overrides db.

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
