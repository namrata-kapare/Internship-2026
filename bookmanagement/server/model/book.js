const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    bookPrice:{
        type:String,
        required:true
    },
    publishDate:{
     type:String,
     required:false

    }
},{timestamps:true})

const book=mongoose.model("bookdetails",schema)

module.exports=book;