// Node.js Environment
// Node.js has direct access to the file system through the fs module.


const fs=require('fs');
fs.readFile('a.txt','utf8',(err,data)=>
    {
        if(err)
            {
                console.log(err);
                return 
            }
            console.log(data);
    });

    fs.writeFile('a.txt','i am sanjana','utf8',(err)=>
        {
            if(err)
                {
                    console.log(err);
                    return;
                }
                console.log('file written succesfully');
        });