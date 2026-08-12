



// freeze method

// 1.it is used to freeze the object 
// ** we do not add new value into the object or delete
// ** we cannot chnage value inside the object or delete

// let obj=
// {
//     key1:"val1",
//     key2:"val2",
//     key3:"val3"
// }

// Object.freeze(obj);
// console.log(obj);


// 2.seal method
// **we do not add new value into the object or delete
// ** but we modify the existing object values

// let obj=
// {
//     key1:"val1",
//     key2:"val2",
//     key3:"val3"
// }

// Object.seal(obj);
// obj.key3="val99"
// console.log(obj);

// ************************************************************************

// math  in build methods object

// ** get PI value

const pi= Math.PI;
console.log(pi);

// **get square root

let sq=Math.sqrt(81);
console.log(sq);

// ** get power
let pow=Math.pow(3,4)           // first value -base value  second value -upper value
console.log(pow);

// **
let a=Math.ceil(78.26);             //it convert its highest value means 79
console.log(a);

// **
let b=Math.floor(78.56);                //it remove the above points means 78
console.log(b);

// **
let c=Math.round(78.26);
console.log(c);

// ** get min value
let min=Math.min(45,7,56,8);
console.log(min);

// **get max value
let max=Math.max(78,56,3,58);
console.log(max);

// **get random number       we can use in OTP generation
let random=Math.random();
console.log(random);

// *************************************************************

// date inbuilt method

let date=new Date();
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());                               //according to the indian time
console.log(date.getMonth());
console.log(date.getMilliseconds());
console.log(date.getSeconds());



console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());                               //according to the universal time coordinate
console.log(date.getUTCDate());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCSeconds());