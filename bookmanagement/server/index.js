
const express=require('express');
const databaseConnection=require('./database');
const router=require('./route/bookRoute');
const app=express();

databaseConnection();

app.use("/book",router)

app.listen(3000,()=>{
    console.log("server is list");
})