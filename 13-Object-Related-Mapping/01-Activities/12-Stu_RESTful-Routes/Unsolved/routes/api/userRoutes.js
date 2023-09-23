const router = require('express').Router();
const User = require('../../models/User');

// TODO: Refactor these using try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
//      new
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);    
    res.status(200).json(userData);

  } catch (err) {
     res.status(500).json(err)
  }
});

//        Old
// router.get('/:id', async (req, res) => {
//   const userData = await User.findByPk(req.params.id).catch((err) =>
//     res.json(err)
//   );
//   res.json(userData);
// });

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);    
    
    if(!userData) {
      res.status(200).json(userData);
    } else {
      res.status(500)
    }
    
  } catch (err) {
     res.status(500).json(err)
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;
