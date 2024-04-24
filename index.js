const express = require("express");
const mongoose = require("mongoose");
const routeapi = require("./routes/internship.routes.js");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
}));

app.use('/api/users', routeapi);

mongoose
  .connect("mongodb://localhost:27017/internship")
  .then(() => {
    console.log("Connected to the database");
    app.listen(3002, () => {
      console.log("Server is running at port 3002");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("The Node server is running, API");
});
