const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds247637.mlab.com:47637/heroku_l274z5fq",
  { useNewUrlParser: true }
);

const cardSeed = [
  {
    name: "apple",
    image: "./assets/images/fruit/apple.gif",
    clicked: false
  },
  {
    name: "banana",
    image: "./assets/images/fruit/banana.gif",
    clicked: false
  },
  {
    name: "blackcurrant",
    image: "./assets/images/fruit/blackcurrant.gif",
    clicked: false
  },
  {
    name: "cantaloupe",
    image: "./assets/images/fruit/cantaloupe.gif",
    clicked: false
  },
  {
    name: "durian",
    image: "./assets/images/fruit/durian.gif",
    clicked: false
  },
  {
    name: "fig",
    image: "./assets/images/fruit/fig.gif",
    clicked: false
  },
  {
    name: "grapefruit",
    image: "./assets/images/fruit/grapefruit.gif",
    clicked: false
  },
  {
    name: "lemon",
    image: "./assets/images/fruit/lemon.gif",
    clicked: false
  },
  {
    name: "longan",
    image: "./assets/images/fruit/longan.gif",
    clicked: false
  },
  {
    name: "mango",
    image: "./assets/images/fruit/mango.gif",
    clicked: false
  },
  {
    name: "mangosteen",
    image: "./assets/images/fruit/mangosteen.gif",
    clicked: false
  },
  {
    name: "plum",
    image: "./assets/images/fruit/plum.gif",
    clicked: false
  }
];

db.Card.deleteMany({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
