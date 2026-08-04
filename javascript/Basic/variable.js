// variable in JavaScript
// 1.let
// 2.var
// 3.const

// 1.let
// redeclaration - not possible
let a="hello";
let a=45;
console.log(a);

// reinitialization - possible
let a="hello";
a=30;
console.log(a);

// hoisting-not possible
a=30;
let a;
console.log(a);


// 2.var variable
// redeclaration-possible
var b=30;
var b=70;
console.log(b);

// reinitialization-possible
var b=30;
b=40;
console.log(b);

// hoisting - possible
b=20;
var b;
console.log(b);

// 3.const variable
// redeclartaion - not possible
const a=30;
const a="hello";
console.log(a);

// reinitialization - not possible
const b=80;
b=40;
console.log(b);

// hoisting - not possible
a=40;
const a;
console.log(a);


