//function declartion

function sum()
{
    console.log("anjali");
}
sum();

//function expression

var a=function()
{
    console.log("anjali");
}
a();

// arrow function

const greet=()=>
{
   console.log("anjali");
};
greet();

//4. Anonymous Functions
//Anonymous functions are function expressions without a name. They are often used as arguments to other //functions or as immediately invoked function expressions (IIFE).

setTimeout(function()
{
    console.log("anjali");
},2000);

//5. Immediately Invoked Function Expressions (IIFE)
//IIFE is a function expression that is executed immediately after it is defined. It is often used to create a //local scope to avoid polluting the global namespace.

(function()
{
    console.log("anjali");
})();

//6. Named Function Expressions
//A named function expression is similar to an anonymous function expression but includes a name, which is //useful for recursion or debugging.

const factorial=function fun(n)
{
    if(n<=1)
        return 1;
    return n*fun(n-1);
}
console.log(factorial(5));

/*7. Generator Functions
Generator functions are functions that can be paused and resumed, allowing for asynchronous programming and complex iterative algorithms. They are defined using the function* syntax and use the yield keyword.*/

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

for (const value of generator)
     {
        console.log(value); 
     }
