const router = require("express").Router();
const Book = require("../../models/Book");

// Route that gets all the books
router.get("/", (req, res) => {
  // gets the books from the db and sends them as json to the client.
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// gets all paperback books
router.get("/paperbacks", (req, res) => {
  Book.findAll({
    // findAll equivelent to SELECT *
    // orders books by title
    order: ["title"],
    // gets only paperback books
    where: {
      is_paperback: true,
    },
    attributes: {
      // excludes these atributes.
      exclude: ["is_paperback", "edition"],
    },
  }).then((bookData) => {
    res.json(bookData);
  });
});

// retrieved the book specified by the id.
router.get("/:id", (req, res) => {
  // finds the book by id and sends it back as json.
  Book.findByPk(req.params.id).then((bookData) => {
    // Pk is primary key.
    res.json(bookData);
  });
});

// CREATE a book
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple books
router.post("/seed", (req, res) => {
  Book.bulkCreate([
    {
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter Brown",
      isbn: "978-0674729018",
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
      author: "Kenneth Rubin",
      isbn: "978-0137043293",
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      isbn: "978-0596517748",
      pages: 176,
      edition: 1,
      is_paperback: true,
    },
    {
      title: "The Pragmatic Programmer: Your Journey To Mastery",
      author: "David Thomas",
      isbn: "978-0135957059",
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
      author: "Donald Knuth",
      isbn: "978-0201896831",
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: "Learning Node: Moving to the Server-Side",
      author: "Shelley Powers",
      isbn: "978-1491943120",
      pages: 286,
      edition: 2,
      is_paperback: true,
    },
  ])
    .then(() => {
      res.send("Database seeded!");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
