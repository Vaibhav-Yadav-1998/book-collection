const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// defining schema for storing books data
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "book title is required"]
  },
  author: {
    type: String,
    required: [true, "book author is required"]
  },
  cover: {
    type: String,
    default: "https://tinyurl.com/ybloln78"
  }
});

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
