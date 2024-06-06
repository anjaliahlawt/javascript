// length of string

function getlength(str)
{
    console.log("original string",str);
    console.log("length of string is",str.length);
}
getlength("anjali");

//indexof

function findindexof(str,target)
{
    console.log("original string ",str);
    console.log("index",str.indexOf(target));
    
}
findindexof("anjali ahlawat","ahlawat");
let a= "anjali";
console.log(a.indexOf("j"));

// last indexof

function findindexof(str,target)
{
    console.log("original string",str);
    console.log("index",str.lastIndexOf(target));
}
findindexof("my name is anjali","is");
let b ="anjali";
console.log(b.lastIndexOf("i"));

//slice
function getslice(str,start,end)
{
    console.log("original string",str);
    console.log("after slice",str.slice(start,end));
}
getslice("hello world",1,7);
const value="anjalikkk";
console.log(value.substr(2,5));
const val="anjalikkk";
console.log(val.slice(2,5));

//