var fs = require("fs")

// var file = fs.readFileSync("node.txt")

// var fileString = file.toString()

// console.log(fileString);


//asychronus
 fs.readFile("node.txt", (err,data)=>{
    console.log(data.toString());
})

//var fileString = file.toString()

//console.log(fileString);
