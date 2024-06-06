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

//replace
function replacestring(str,target,replacmnet)
{
  console.log("original string",str);
  console.log("after replace",str.replace(target,replacmnet));
}
replacestring("anjali ahlawat","ahlawat","anju");

//split

function splitstring(str,seprate)
{
    console.log("original string",str);
    console.log("after split",str.split(seprate));
}
splitstring("hello anjali","hello");

//trim
function trimstring(str)
{
    console.log("original string",str);
    console.log("after trim",str.trim());
}
trimstring("     anjali ahlawat        ");

//touppercase

function touppercase(str)
{
    console.log("original string",str);
    console.log("afetr touppercase",str.toUpperCase());
}
touppercase("anjali");

//tolowercase
function tolowercase(str)
{
    console.log("original string",str);
    console.log("after tolowercase",str.toLowerCase());
}
tolowercase("HEELO WORLD");