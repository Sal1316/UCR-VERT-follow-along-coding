const router = require("express").Router();
const sequelize = require("../config/connection");
const Dish = require("../models/Dish");

router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll(); // whenever we request data from the DB, it has to be async/await or promises.
    console.log("BeforE POJO:>", dishData);

    const dishes = dishData.map((dish) => dish.get({ plain: true })); // convert each items in the array to 'polo'
    console.log("AftEr POJO:>", dishes);

    res.render("all", { dishes });
  } catch (err) {
    res.status(500).json({ message: "Something really bad happend." });
  }
});

// route to get one dish
router.get("/dish/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.get({ plain: true }); // converts sequalize data to 'pojo'
    res.render("dish", dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
