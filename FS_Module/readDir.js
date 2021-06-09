var fs = require('fs');

function searchFile(filename)
{

    fs.readdir("./", (err,files)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            var fileIndex = files.indexOf(filename)

            if(fileIndex == -1)
            {
                console.log("File Not Present");
            }
            
            else
            {
                fs.readFile(files[fileIndex], (err,data)=>{

                    console.log("The Contents are :",data.toString());

                })
            }
           // console.log(files[fileIndex]);
        }
    })
}

searchFile("demo.txt")
