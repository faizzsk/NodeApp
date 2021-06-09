var fs = require('fs');

function searchFile(filename)
{

    fs.readdir("./", (err,files)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            
            
            
              var file = files.filter((data)=>{
                    if(data == filename)
                    {
                       var fn = data;
                        //return data
                        fs.readFile(fn, (err,file)=>{

                            console.log("The Contents are :",file.toString());
         
                         })
                       
                    }
                })
               
               
           // console.log(files[fileIndex]);
        }
    })
}

searchFile("demo.txt")
