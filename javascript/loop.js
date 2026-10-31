// while loop
// var a=1;
// while(a<=10){
//     console.log(a);
//     a++;
// }

// WAP to print 1 to 10 using while loop
var a=1;
while(a<=10)
{
    console.log(a);
    a++;
}

// WAP to print 10 to 1 using while loop
var a=10;   
while(a>=1)
{
    console.log(a);
    a--;
}

// WAP to print sum of 1 to 10 using while loop
var a=1;
var sum=0;  
while(a<=10)
{
    sum=sum+a;
    a++;
}
console.log(sum);









// do while loop

var a=1;
do{
    console.log(a);
    a++;
}while(a<=10);

// for loop
for(var a=1;a<=5;a++)
{
    console.log(a);
}


// nested for loop
for(var a=1;a<=3;a++)
{
    for(var b=1;b<=3;b++)
    {
        console.log(a,b);
    }
}