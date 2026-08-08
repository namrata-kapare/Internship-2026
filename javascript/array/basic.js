
// array- it is used to store homogenous or heterogenous value

let arr=[10,20,30,"helllo",true];
console.log(arr);

// array mutable -modifications are possible

let a=[10,20,30,"helllo",true];
a[0]=99;
console.log(a);

// array length

let b=[10,20,30,"helllo",true];
console.log(b.length);

// array iterate


// 1.normal for loop
let c=[10,20,30,40];
for(let i=0;i<c.length;i++)
{
    console.log(c[i]);
}

// 2.for of loop

for(let a of arr)        //[10,20,30,40]
{
    console.log(a);      //10,20,30,40
}

// 3.foreach loop - functional programming
// [10,20,30,40].forEach(val)
let ar=[10,20,30,40];

ar.forEach((val)=>            //(value,index.array)-arrow function
{
    console.log(val);
})