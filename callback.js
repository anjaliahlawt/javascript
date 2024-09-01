//A callback is a function passed as an argument to another function .This technique allows a function to call another function .A callback function can run after another function has finished

// function greet(name)
// {
//     console.log("hello" +" "+ name);
// }
// function user(greet)
// {
//      var name= "anjali";
//      greet(name);
// }
// greet("shiva");


// //Asynchronous Example

// function gree()
// {
//     console.log("hello anjali");
// }
// setTimeout(gree,10000);

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

function student(name,age)
{
   console.log("my name is"+name+"i am "+age);
}
function print(student)
{
    let age=12;
    var name="anjali";
    student(name,age);
    
}
//student("anju",11);
print(student);