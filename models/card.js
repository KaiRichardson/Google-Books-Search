const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  clicked: { type: Boolean, default: false }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
