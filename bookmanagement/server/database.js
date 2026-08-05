const mongoose=require('mongoose');

const databaseConnection=()=>{
    mongoose.connect('mongodb://namratakapare2_db_user:Login123@ac-1obwodt-shard-00-00.9vaohzp.mongodb.net:27017,ac-1obwodt-shard-00-01.9vaohzp.mongodb.net:27017,ac-1obwodt-shard-00-02.9vaohzp.mongodb.net:27017/?ssl=true&replicaSet=atlas-9mfgke-shard-0&authSource=admin&appName=Cluster0')
        .then(()=>console.log("database connected"))
        .catch(err=> console.log(err));
};

module.exports=databaseConnection;