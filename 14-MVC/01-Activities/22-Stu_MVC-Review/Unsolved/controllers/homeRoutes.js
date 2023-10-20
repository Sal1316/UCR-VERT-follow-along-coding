const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await User.findAll({
    attributes: { exclude: ["password"] },
    order: [["name", "ASC"]], // ['lastName', 'DESC'] optional second
  });
  const users = userData.map((user) => user.get({ plain: true }));

  res.render("homepage", { users: users });
});

module.exports = router;
