// express server
const express=require('express');
const databaseConnection = require('./database');
const router = require('./route/bookRoute');
const cors = require('cors');
const app=express();


databaseConnection();

app.use(cors(""));
app.use(express.json())
app.use("/book",router)

app.listen(3000,()=>{
    console.log("server is listening on port 3000");

})


