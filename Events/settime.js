
setTimeout(()=>{
    console.log("3");
},2000)

setImmediate(()=>{
    console.log("2");
},2000)

console.log("1");