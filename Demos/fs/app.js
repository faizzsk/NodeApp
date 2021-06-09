var fs=require("fs")
fs.readFile('input.txt',(err,data)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Async data ais ",data.toString())
    }    
})
var data =fs.readFileSync("input.txt")
console.log("sync data is "+data.toString())
console.log("This is the End...");
