const express = require("express");
const {bookRouter}=require("./controller/bookingRouter")
require("dotenv").config();
const { connect } = require("./config/db");
const {userRouter}=require("./controller/userRouter")
const { flightRouter }=require("./controller/flightRouter")

const app = express();
app.use("/user", userRouter);
app.use("/flight", flightRouter);
app.use("/booking", bookRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log(`server started on port ${process.env.port}`);
  } catch (err) {
    console.log(`err while starting the port on ${process.env.port}`);
  }
});



