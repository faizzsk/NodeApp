var fs = require("fs")

//fs.appendFileSync("node.txt","And Then he was gone")

fs.appendFile("demo.txt"," How Are You" , (err)=>{

    if(err)
    {
        console.log(err);
    }
    else{
        console.log("append succesfull");
    }

})