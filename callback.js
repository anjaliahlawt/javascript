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

//Asynchronous Example

function gree()
{
    console.log("hello anjali");
}
setTimeout(gree,10000);

//Callback Hell
//When multiple asynchronous operations need to be performed in sequence, you might end up with deeply nested /callbacks, which is known as "callback hell.

function first(callback)
{
    setTimeout(()=>{
  console.log("first");
  callback();
    },2000);
}
function second(callback)
{
    setTimeout(()=>{
        console.log("second");
        callback();
    },1000);
}

function third(callback)
{
    setTimeout(()=>{
       console.log("third");
       callback(); 
    },3000);
}
first(()=>{
    second(()=>{
        third(()=>{
            console.log("done");

        });
    });
});

//