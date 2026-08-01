// write a program to classify age group
// Age        category
// ------------------------
// 0-12       Child
// 13-19      Teen
// 20-59      Adult
// 60+        senior

var age=10;

if(age>0&&age<12)
{
    console.log("Child")
}   
else if(age>13&&age<19)
{
    console.log("Teen")
}
else if(age>20&&age<59)
{
    console.log("Adult")
}
else
{
    console.log("Senior")
}