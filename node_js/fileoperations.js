const fs=require("fs");

function fileoperations(){
    //read file
    console.log("File Opeartions started");
    fs.writeFile('file.txt','data written from file operations file',()=>{
        console.log("data wriiten successfully");
    }  );

    //fs.writeFileSync("file.txt",data writting....");
    console.log("File Opeartions ended");
}
module.exports=fileoperations;
