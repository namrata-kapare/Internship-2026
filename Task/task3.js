

// online shopping discount using else if ladder
// Write logic : If bill>5000 ->discount 20%
//               If bill>3000 -->discount 10%
//               If bill>1000 -->discount 5%
//               Else --> no discount


var bill=7000;
var amt;
if(bill>5000)
{
    amt=bill*0.20;
    console.log("Congratulations You Got 20% Discount",amt);
}
else if(bill>3000)
{
    amt=bill*0.10;
     console.log("Congratulations You Got 10% Discount",amt);
}
else if(bill>1000)
{
    amt=bill*0.05;
     console.log("Congratulations You Got 5% Discount",amt);
}
else
{
     console.log("NO DISCOUNT...!!!");
}