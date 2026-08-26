
// callback hell

function Login(add)
{
    console.log("Login succesfully");

    add(function order()
{
    console.log("ordering your pizza");

})

}

Login(function addToCart(b)
{
    console.log("pizza added to cart");
    b();
})