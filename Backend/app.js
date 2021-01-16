require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todo");

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connectd");
  });

app.use("/api", todoRoutes);

app.listen(process.env.port || 8000, () => {
  console.log("Server started at port 8000");
});
