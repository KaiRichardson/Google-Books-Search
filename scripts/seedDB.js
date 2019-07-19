const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds351107.mlab.com:51107/heroku_rct5dgnp",
  { useNewUrlParser: true }
);

const bookSeed = [
  {
    google_id: "g29-DwAAQBAJ",
    title: "HALO: The Flood",
    thumbnail: "http://books.google.com/books/content?id=g29-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    authors: "William C. Dietz",
    genre: "Fiction",
    published: "2019-01-01",
    link: "https://books.google.com/books/about/Halo_Graphic_Novel.html?hl=&id=go5KSAAACAAJ",
    description: "The bestselling adaptation of the iconic video game Halo: Combat Evolved featuring the Master Chief—part of the expanded universe based",
    date: new Date(Date.now())
  },
  {
    google_id: "g29-DwAAQBAJ",
    title: "HALO: The Flood",
    thumbnail: "http://books.google.com/books/content?id=g29-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    authors: "William C. Dietz",
    genre: "Fiction",
    published: "2019-01-01",
    link: "https://books.google.com/books/about/Halo_Graphic_Novel.html?hl=&id=go5KSAAACAAJ",
    description: "The bestselling adaptation of the iconic video game Halo: Combat Evolved featuring the Master Chief—part of the expanded universe based",
    date: new Date(Date.now())
  },
  {
    google_id: "g29-DwAAQBAJ",
    title: "HALO: The Flood",
    thumbnail: "http://books.google.com/books/content?id=g29-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    authors: "William C. Dietz",
    genre: "Fiction",
    published: "2019-01-01",
    link: "https://books.google.com/books/about/Halo_Graphic_Novel.html?hl=&id=go5KSAAACAAJ",
    description: "The bestselling adaptation of the iconic video game Halo: Combat Evolved featuring the Master Chief—part of the expanded universe based",
    date: new Date(Date.now())
  }
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
