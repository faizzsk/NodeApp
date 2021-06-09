var fs = require("fs")

let chunkIndex = 0;

const readStream = fs.createReadStream("node.txt")

readStream.on("open",()=>{
    console.log("Started Reading");
})

readStream.on("end",()=>{
    console.log("End Reading");
})

readStream.on("data", chunk=>{
    console.log("chunk",+ ++chunkIndex);
    console.log("-------------------");
    console.log(chunk);
    console.log("\n");
})