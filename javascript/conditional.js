// conditional opearator
// nested if else   -->if inside another if
  
var a=10;
if(a<20)
    {
        console.log("IF block");

         if(a!=10)
         {
           console.log("Nested IF");
         }  
          else
         {
           console.log("Nested Else");
         }
     }
     else
    {
      console.log("Else Block");
    }



// else if ladder - more than one condition
var a=10;
   if(a<20)
   {
    console.log("if1");
   }
   else if(a==10)
   {
    console.log("if2");
   }
   else if(a!=20)
   {
    console.log("if3");
   }
   else
    {
    console.log("else");
   }
// switch case

var a=10
switch(a)
{
  case 10:console.log(1);break;
  case 20:console.log(2);break;
  case 30:console.log(3);break;
  case 40:console.log(4);break;
  
}   