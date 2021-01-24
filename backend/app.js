const express= require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

/*
//MiddleWares
app.use('/Chhajaati',()=>{
    console.log("This is a middleware running");
});
*/


//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB.")
);

//Import routes
const postsRoutes=require('./routes/posts');

app.use('/posts',postsRoutes);
//app.use('/user',userRoutes);

//Routes
app.get('/',(req,res)=>{
    res.send("Welcome to Home");
});

app.get("/Chhajaati", (req, res) => {
  res.send("Welcome to my app Chhajaati");
});

//Start listening to the server
app.listen(3001);