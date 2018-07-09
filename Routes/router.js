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

// exporting router
module.exports = router;
