const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  google_id: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  authors: String,
  genre: String,
  published: String,
  link: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
