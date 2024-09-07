const router = require("express").Router();
const { Gallery, Painting } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ["filename", "description"],
        },
      ],
    });

    const galleries = dbGalleryData.map(
      (gallery) => gallery.get({ plain: true }) // POJO
    );

    req.session.save(() => {
      // We create a session variable ".countVisit" to count the number of times we visit the homepage
      if (req.session.countVisit) {
        // If the 'countVisit' session variable already exists, increment it by 1
        req.session.countVisit++;
      } else {
        // If the 'countVisit' session variable doesn't exist, set it to 1. Meaning that the session in brand new.
        req.session.countVisit = 1;
      }

      res.render("homepage", {
        // ?
        galleries,
        // We send over the current 'countVisit' session variable to be rendered
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/gallery/:id", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            "id",
            "title",
            "artist",
            "exhibition_date",
            "filename",
            "description",
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render("gallery", {
      gallery,
      /* We are not incrementing the 'countVisit' session variable here,
      but simply sending over the current 'countVisit' session variable to be rendered*/
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get("/painting/:id", async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render("painting", {
      painting,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

/*NOTES: */
/* Questions:

1. IN the session.save(), what is it that extracts the values of countVisits in the homepage?
    ans: To access those countVisit values, we pass the object that has the 'galleries, and the 
         countVisit properties.

*/
