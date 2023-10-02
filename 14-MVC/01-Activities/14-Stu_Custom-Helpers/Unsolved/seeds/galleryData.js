const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Printemps',
    starting_date: 'April 20, 2023 07:00:00',
    ending_date: 'June 21, 2023 17:00:00',
  },
  {
    name: 'Sommer',
    starting_date: 'June 22, 2023 09:00:00',
    ending_date: 'September 22, 2023 22:00:00',
  },
  {
    name: 'Herfst',
    starting_date: 'September 23, 2023 08:30:00',
    ending_date: 'December 21, 2023 20:30:00',
  },
  {
    name: 'Invierno',
    starting_date: 'December 22, 2023 11:00:00',
    ending_date: 'March 19, 2024 19:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
