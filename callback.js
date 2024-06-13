function greet(name)
{
    console.log("hello" +" "+ name);
}
function user(callback)
{
     var name= "anjali";
     callback(name);
}
user(greet);

