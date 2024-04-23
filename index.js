// Router is used for sending data from one to another usin API

const express = require("express"); // for connecting HTTP requests & response
const mongoose = require("mongoose"); // for connecting Mongo DB
const routeapi = require("./routes/internship.routes.js");

const app = express(); // for storing in object
app.use(express.json()); //Data in JSON format

app.use('/api/users',routeapi) // routes are defined here API calling here



// Connecting to MongoDB server using Mongoose
mongoose
  .connect("mongodb://localhost:27017/internship") // Mongo db la poi edu da
  .then(() => {
    console.log("Connected to the database");
    app.listen(3002, () => {
      // port no settuping
      console.log("Server is running at port 3002");
    });
  })
  .catch(() => {
    // (err)
    console.log("Not connected to MongoDB");
  });
app.get("/", (req, res) => { // For getting data using API
  res.send("the Node server is running,API");
});
