const express = require("express");
const fs = require("fs");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(helmet());

const userRouter = require("./route/user");
dotenv.config();
app.use(express.json());

app.use("/", userRouter);

mongoose
  .connect("mongodb://localhost:27017/sh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("success"))
  .catch((err) => console.log(err));

app.listen(6000, () => {
  console.log("app is running on port 6000");
});
