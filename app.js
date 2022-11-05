const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const productRoute=require('./routes/product.route')
const userRoute=require("./routes/user.route")

app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
app.use("/api/v1/product",productRoute)
app.use("/api/v1/user",userRoute) 


module.exports = app;
