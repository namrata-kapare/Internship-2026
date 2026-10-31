const express=require('express');
const { handleAddBookController } = require('./bookController');

const router=express.Router();

router.get("/getmsg",(req,res)=>{
    res.send("response from book router page")
})
router.post("/addbook",handleAddBookController)
//get post put delete

module.exports=router;