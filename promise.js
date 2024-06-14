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