const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb server");
  })
  .catch((err) => {
    console.log("error connecting to database" + err);
  });
app.get("/hello-world", (req, res) => {
  res.send("hello world");
});
app.listen(process.env.PORT, () => {
  console.log("Backendserver has started at " + process.env.PORT);
});
