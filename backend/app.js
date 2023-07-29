const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer')
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");


const authRoutes = require('./routes/auth');


// ADD THIS
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/auth', authRoutes);

//all routes import 
const item = require("./routes/itemRoute");

const category = require("./routes/categoryRoute")
const material = require("./routes/materialRoute")
const order = require("./routes/orderRoute")


app.use("/api/v1", item);
app.use("/api/v1", category);
app.use("/api/v1", material);
app.use("/api/v1", order);





module.exports = app;