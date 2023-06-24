// using if and for in js

/*for(let i=0;i<10;i++)
{
    if (i%2==0) {
        console.log(i)   
    }
    else if(i==5)
    {
console.log("THIS IS HALF")
    }
    else{
        console.log(" sorrt i =" +i)
    }
}*/
// using function in js
//multiply function
/*function multiply( num1,num2)
{console.log(num1*num2)}
multiply(2,3)
multiply(10,5)
multiply(16,8)*/

//ask user to enter a name

/*let name=prompt("please enter the name ")
//console.log(name)

// print even and odd numbers 
function num(nam1,nam2)
{
    for(let i=nam1;i<nam2;i++)
    {if(i%2==0)
    {console.log("this is an even number :"+i+" "+name)}
else{
    console.log("this is an odd number :"+i)
}}
}

num(40,60)*/

/*//function 3
let name=["sarah","karin","lara"]
let mark=[70,90,50]
function marks(){
for(let i=0;i<name.length;i++)
{
    console.log(name[i])
}
for (let j=0;j<mark.length;j++)
{console.log(mark[j])}}
marks()*/

// function 4 prnt name and the mark @ the same line

let name=["sarah","karin","lara"]
let mark=[30,90,50]
function result()
{
for(let i=0;i<mark.length;i++)
{
    if(mark[i]<50)
    {
        console.log("Hi "+name[i]+" :sorry  your score is "+mark[i]+" you have faild :(")
    }
    else if(mark[i]>=50)
    {
        console.log("Hi "+name[i]+" :congratulation  your score is "+mark[i]+" you have passed :)")}
        else{

            console.log("Check the mark please !")
        }
}


}
result()