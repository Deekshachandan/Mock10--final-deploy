const express = require("express");

const { BookingModel   } = require("../model/BookingModel");


const bookRouter = express.Router();


bookRouter.post("/book", async (req, res) => {
  const payload = req.body;
  try {
    const book = new  BookingModel (payload);
    await book.save();
    res.status(201).send("Created the book Model");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});


bookRouter.get("/dashboard", async (req, res) => {
  try {
    const bookRouter = await BookingModel.find().populate(["user", "flight"]);
    res.status(200).send({ Dashboard: bookRouter });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

module.exports = { bookRouter }