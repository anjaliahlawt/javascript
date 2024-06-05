// write the program to greet a person given their first and last name.

// let firstname="anjali";
// let lastname="ahlawat";
// console.log("good morning"+" "+firstname+" "+lastname);

//write the program to greet a person given their gender.(if-else)

// let iswomen=false;

//   if(iswomen==true)
//     {
//         console.log("hello mam");
//     }
//     else
//     {
//         console.log("hello sir");
//     }

// write a program that countsfrom 0to 100 and prints.

// let a=0;
// for(a=0;a<=10000;a++)
//     {
//         console.log(a);
//     }

 //write a program prints all the even numbers in an array
 
//  const arr=[20,22,24,26,28];
//  for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2==0)
//             {
//                 console.log("is even number"+" "+arr[i])
//             }
//             else
//             {
//                 console.log("is not a even number"+arr[i]);
//             }
//     }
    
// write a program to print the biggest number in an array

let arr=[20,23,25,12];
let max=arr[0];
for(let i=1;i<=arr.length;i++)

    {
        if(arr[i]>max)
            {   
                 max=arr[i];
               
            }
            
    }
    console.log(max+" "+"is a biggest number in array");
