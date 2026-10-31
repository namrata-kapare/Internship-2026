// Unary Operator - value
// ------------------------------------------------------------------------------
// 1.increment ++ - it is used to increment by one
// pre ++a post a++

// Task1
var a=10;
console.log(a++);
console.log(++a);

// Task2
var a=10
var b=++a
console.log(++a);
console.log(b++);
var c=++b
console.log(a+b+c);

// 2.decrement -- - it is used to decrement by one
// Task3
var a=10
var b=--a
console.log(--a);
console.log(b--);
var c=--b
console.log(b++);
console.log(a+b+c);

// 2.Binary Operator
// -------------------------------------------------------------------------------
// 1.arithmetic operator + - * / - it is used to quotient
// % - it is remainder
// 2.assignment += -= *= /= %=
// var a=10
// a+=20 - a=a+20

var a=10
var b=++a;
b+=a;
a*=2;
console.log(a++);
console.log(b);
a/=b;
b%=2
console.log(a+b);

// 3.comparision operator - > < >= <= == != ===
// ------------------------------------------------------------------------
console.log(10==="10");

// 4.logical operator - && || !
// --------------------------------------------------------------------

// 1.logical and &&
// true&&true -> true
// true&&false->false
// false&&true->false
// false&&false-->false

// -****************************

// 2.logical or
// true||true -> true
// true||false->true
// false||true->true
// false||false-->false

// ****************************

// 3.logical not
// ! 
// if true-> false
// if false->true


// 5.ternary operator
// ---------------------------------------
// condition ? task1: task2
// true-->task1
// false-->task2
 console.log(10>20?"hii":"byy");