//using var
console.log(x);
var x=3;

//using let
// console.log(y); 
// let y = 10;

//using const
// console.log(z); 
// const z = 15;

//function hoisting
//1. Function Declarations
sum();
function sum()
{
    let a=10,b=2;
    console.log(a+b);
}

//function expression
a();
 var a=function()
 {
    console.log("anjali");
 }