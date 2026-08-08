
// reduce - entire array reduce generate single array

// WAP to print sum of array 
// 1 2 3 4 5 

let arr=[1,2,3,4,5];

let sum=arr.reduce ((current,next)=>
{
    return current+next;
})

console.log(sum);