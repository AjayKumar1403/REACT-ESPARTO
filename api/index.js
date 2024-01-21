const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");





app.use(express.json());
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successfull"))
    .catch((err) => console.log(err));

