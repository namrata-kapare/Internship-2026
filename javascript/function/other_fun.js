
// 1.high order function - function which receives another function as arguement

// 2.call back function - function which passes function as an arguement


// high order function

function test (a)
{
    console.log("test function");               
}

// call back function

test (function fun1()
{
    console.log("function..........")
})

// we used with the help of arrow function

function test(a)
{
    console.log("test function");
    a();

}
test(() => {
    console.log("arrow function");
})
