
// function within function

function fun1()
{
    console.log("FUNCTION 1");

     function fun2()
     {
       console.log("FUNCTION 2");

        function fun3()
        {
            console.log("FUNCTION 3");

        }
        fun3()
     }
     fun2()
}

fun1();   
