const mongoose=require('mongoose')

const databaseConnection=()=>{
    mongoose.connect('mongodb+srv://namratakapare2_db_user:TohabvpuiLm8xxW6@cluster0.9vaohzp.mongodb.net/?appName=Cluster0')
        .then(()=>{console.log("database connected");})
        .catch((err)=>{
    console.log(err);

 })
}


module.exports=databaseConnection