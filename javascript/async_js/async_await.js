
// 3. async await
// database connected
function getUser(id){
    return new Promise((res,rej)=>{
        if(id<=10){
            res("user with id:"+id+"found");
        }
        else{
            rej("user not found")
        }
    })
}

console.log("strart");

// javascript
async function fetchData(){
    try{
        const data=await getUser(3);
        console.log(data);
    }catch(err){
        console.log(err);

    }

}
fetchData();

console.log("end");

