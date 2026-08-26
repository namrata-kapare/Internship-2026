
// promises

function order(food)
{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{reject("pizza not delivered deu to heavy rain")},4000)
    })
}

order ("pizza").then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err);

})

console.log("Watch T.V");