const express = require("express");
const app = express();
const bodyParser = require('body-parser');


// const routes = require('./routes/routes');

const authRoutes = require('./routes/auth');


// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/auth', authRoutes);

//all routes import 
const item= require("./routes/itemRoute");

const category = require("./routes/categoryRoute")



app.use("/api/v1",item);

app.use("/api/v1",category);



// app.use('/api', routes);




module.exports = app;