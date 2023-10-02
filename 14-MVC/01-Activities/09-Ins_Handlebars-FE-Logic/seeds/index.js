const sequelize = require("../config/connection");
const Dish = require("../models/Dish");
const dishData = require("./dish-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

/* Questions: 

- How is the data being sourced into the db. I see that the fx, does all the
    work, but since its not being exported how does it get executed?
    
    ans: You have to 'npm run seeds' first. 


*/
