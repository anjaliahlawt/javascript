//push

const arr=[1,2,3];
arr.push(4);
console.log(arr);

//pop

arr.pop();
console.log(arr);

//shift

arr.shift();
console.log(arr);

//unshift

arr.unshift(0);
console.log(arr);

//concat

const arr1=[1,2,3];
const arr2=[4,5,6];
console.log(arr1.concat(arr2));

//for-each 
const arr3=[1,2,3];
function print(str)
{
    console.log(str);
}
arr3.forEach(print);

//map
