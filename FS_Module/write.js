var fs = require("fs")


//console.log(fs.writeFileSync("node.txt","Hello Node"));



fs.writeFile("demo.txt","Hello Faizzz", (err)=>{

    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Done");
    }
})










