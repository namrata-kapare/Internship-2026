// add book
const handleAddBookController=(req,res)=>{
    try{
    const data=req.body
  console.log(data);
  let bookdata=await book.insertOne(data);
  return res.status(200).json({Message:"details Added"})

}catch(err){

    return res.status(500).json({Message:err.Message})
}

}
