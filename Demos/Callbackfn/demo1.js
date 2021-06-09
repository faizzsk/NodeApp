console.log("request1");
setTimeout(function cb(){
   console.log("Processing of request1");
},5000);
console.log("After the  request1");

console.log("request2");
setTimeout(function cb(){
   console.log("Processing of request1");
},5000);
console.log("After the  request2");