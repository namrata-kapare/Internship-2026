const express=require('express');
const databaseConnection = require('./database');
const app=express();

databaseConnection();

app.get("/book",(req,res)=>{
    res.send("building book management app");
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000");

})


