const sequelize = require('../config/connection');
const Dish = require('../models/Dish');
const dishData = require('./dish-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

/* NOTES:

- WHERE IS THIS index.js FILE BEING USED? or what calles it? 
  ans: npm run seeds. Need to have 'run' eventhough its not in package.json
    Uses the "seeds": "node seeds/index.js",

*/
