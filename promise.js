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
 