const router = require("express").Router();
const { Gallery, Painting } = require("../models");

// GETs all galleries for homepage
router.get("/", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        //  retrieves data from Painting. LIke a JOIN
        {
          model: Painting,
          attributes: ["filename", "description"], // gets these props from the model Painting
        },
      ],
    });
    // console.log("\n\n dbGAllEryDAtA:", dbGalleryData);
    const galleries = dbGalleryData.map(
      (gallery) => gallery.get({ plain: true }) // returns 'POJO' of
    );
    console.log("\n\n gAllEriEs POJO:", galleries);
    //
    res.render("homepage", {
      galleries,
    }); // passing in the POJO to be accessed in the homepage.handlebars file.
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
          model: Painting, // gets data from here
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
    res.render("gallery", { gallery });
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

    res.render("painting", { painting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
