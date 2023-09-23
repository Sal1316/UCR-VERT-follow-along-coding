const router = require("express").Router();
const Book = require("../../models/Book");

// TODO finish the PUT route to UPDATE a book in the database with a matching book_id
router.put("/:book_id", (req, res) => {
  Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      wher: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updateBook) => {
      res.json(updateBook);
    })
    .catch((err) => res.json(err));
});

// TODO finish the DELETE route to DELETE a book in the database with a matching book_id
router.delete("/:book_id", (req, res) => {
  Book.destroy({
    book_id: req.params.book_id,
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

router.post("/seed", (req, res) => {
  Book.bulkCreate([
    {
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter Brown",
      isbn: "9780674729018",
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
      author: "Kenneth Rubin",
      isbn: "9780137043293",
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
      isbn: "9780135957059",
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
      author: "Donald Knuth",
      isbn: "9780201896831",
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
  ]).then(() => {
    res.send("Seeding Success!");
  });
});

module.exports = router;
