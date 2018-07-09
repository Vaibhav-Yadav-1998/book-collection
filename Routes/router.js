const express = require("express");
const router = express.Router();
const Book = require("../Models/book-model");

// get request route for getting list of books stored
router.get("/books", (req, res, next) => {
  Book.find({})
    .then(books => res.status(200).json(books))
    .catch(next);
});

// post request route for adding new books
router.post("/books", (req, res, next) => {
  Book.create(req.body)
    .then(book => res.status(201).send(book))
    .catch(next);
});

// put request route for editing existing books
router.put("/books/:id", (req, res, next) => {
  const id = { _id: req.params.id };

  Book.findByIdAndUpdate(id, req.body)
    .then(() => {
      Book.findOne(id).then(book => res.status(200).send(book));
    })
    .catch(next);
});

// delete request route for removing books from database
router.delete("/books/:id", (req, res, next) => {
  Book.findByIdAndRemove({ _id: req.params.id })
    .then(book => res.status(200).send("deleted book with id " + book._id))
    .catch(next);
});

// exporting router
module.exports = router;
