require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connectDb");
const port = process.env.PORT || 3434;
const UssdRoute = require("./router/router");
const cors = require("cors");
const logger = require("morgan");

const app = express();
connectDB();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Success message");
});

app.use("*", UssdRoute);

app.listen(port, () => console.log(`app is listening to port ${port}`));
