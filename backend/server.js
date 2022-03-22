const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors= require("cors");

// connect .env
require("dotenv").config();


// app initialize
const app = express();

// server
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect database
const uri= process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewURLParser: true,
    useUnifiedTopology: true, 
  })
  const connection= mongoose.connection;
  connection.once('open', ()=>{
    console.log("Mongoose database connection established successfully!!!");
  })

 const exercisesRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users');

 app.use('/exercises', exercisesRouter);
 app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});