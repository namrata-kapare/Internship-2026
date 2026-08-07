
function test(a,b){
    b=a;
    return b*2;
}

let c=test(10,20)
let d=test(c,30)
let e=test(c,d)
console.log(c+d+e);          
console.log(test(d,e));