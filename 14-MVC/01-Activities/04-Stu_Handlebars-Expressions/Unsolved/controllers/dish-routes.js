const router = require("express").Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    dish_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
  },
  {
    dish_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
  },
  {
    dish_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
  },
  {
    dish_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
  },
  {
    dish_name: "Pork Gyoza",
    description:
      "Homemade japanese dumplings stuffed with a pork and green onion filling",
  },
  {
    dish_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
  },
  {
    dish_name: "Cape Malay Curry",
    description: "Chicken and vegitable curry dish with basmati rice",
  },
];

// Get all dishes
router.get("/", async (req, res) => {
  return res.render("dish");
});

// renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
router.get("/dish/:num", async (req, res) => {
  return res.render("dish", dishes[req.params.num - 1]); // more in notes:
});

// Bonus part:
router.get("/dish", async (req, res) => {
  return res.render("dish", { dishes }); // what does the { dishes } do? passes the dishes array from dish template.
});

module.exports = router;

//
//

/* NOTES: 

- The value of ":num" is captured from the URL and made available as req.params.num.

- render(param1, param2), 
  + param1, specifies the name of the view template to be rendered.
  + param2, is what you want to pass in to the view template.

- dishes[req.params.num - 1] > need to sub 1 since its an array index.
*/
