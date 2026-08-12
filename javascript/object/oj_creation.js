
// object-it is used to store some data in key and value format

// 3 ways to create object in javascript
// 1.simple object created using curly braces

let watch=
{
    cname: "tittan",
    prize: 5000

}
console.log(watch.prize);


let book=
{
    bname: "ikigai",
    author: "jk",
    price:[100,200,300,400],
    info:function()
    {
        return `${this.bname} written by ${this.author}`
    }
                                               
}
console.log(book.price[2]);
console.log(book.info());


// 2.using object keyword

let student=new Object();
student.name="namrata";
student.rollno=1;
console.log(student);


// 3.using function constructor

function employee(id,name,sal)
{
    this.id=id;
    this.name=name;
    this.sal=sal;
}

let emp1=new employee(1,"geeta",60000)
let emp2=new employee(1,"namrata",90000)
console.log(emp1);
console.log(emp2);




// save chnges