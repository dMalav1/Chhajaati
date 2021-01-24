const express= require('express');
const app=express();

//Routes
app.get('/',(req,res)=>{
    res.send('Welcome to my app Chhajaati');
});

app.listen(3001);