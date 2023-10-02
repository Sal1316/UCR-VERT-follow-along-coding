const router = require("express").Router();
const Dish = require("../models/Dish");

// route to get all dishes
router.get("/", async (req, res) => {
  const dishData = await Dish.findAll().catch((err) => {
    res.json(err);
  });
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  res.render("all", { dishes });
});

// route to get one dish
router.get("/dish/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.get({ plain: true }); // 'POJO'
    console.log("POJO: ", dish);
    res.render("dish", dish); // renders dish.handlebars, and you pass in the const dish data.
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
