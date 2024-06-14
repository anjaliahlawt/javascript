//creating promise

const myPromise=new Promise((resolve,reject)=>
    {
      let sucess=false;
      if(sucess)
        {
            resolve("operation succesfully");
        }
        else
        {
            reject("operation failed");
        }
    })
    myPromise
    .then((result)=>
        {
          console.log("operation successfuly");
        })
    .catch((error)=>
        {
            console.log(error);
        })
    .finally(()=>
        {
          console.log("operation completed");
        });    


 //asynchronous opertion using promise
 
 function asy()
 {
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
                {
                    const success=true;
                    if(success)
                        {
                            resolve("asy opertion sucessed");
                        }
                        else
                        {
                            reject("asy opertion failed");
                        }
                },10000);
        });
 }
 asy()
 
   .then((result)=>
    {
      console.log(result);
    })
    .catch((error)=>
        {
            console.log(error);
        })
    .finally(()=>
        {
            console.log("asy opertion complted");
        });  
 
 //chaining promise


        function firstOperation() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve("First operation complete"), 1000);
            });
        }
        
        function secondOperation(message) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`${message} -> Second operation complete`), 1000);
            });
        }
        
        function thirdOperation(message) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`${message} -> Third operation complete`), 1000);
            });
        }
        
        firstOperation()
            .then((result) => {
                console.log(result);
                return secondOperation(result);
            })
            .then((result) => {
                console.log(result);
                return thirdOperation(result);
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
//async keyword used 

async function data()
{
    return 'data fetched';
}
data()
.then((result)=>
    {
        console.log(result);
    });


 //The await Keyword
//The await keyword is used inside async functions to pause the execution of the function until the Promise is resolved or rejected. It can only be used within an async function.   

async function data1()
{
  let promise=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                console.log(" information fetched");
            },2000);
    });
    let result=await promise;
    console.log(result);
}
data1();