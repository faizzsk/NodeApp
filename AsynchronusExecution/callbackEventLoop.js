
console.log("Start");


setTimeout(()=>{
    console.log("wait for 2 sec");
},2000)

setTimeout(()=>{
    console.log("wait for 0 sec");
},0)

console.log("Stop");

// => call Stack => main() => get pushed
// => call Stack => log() =>  get pushed
// => call Stack => log() =>  get poped 
// => call Stack => setTimeOut => get pushed => then get pushed to Node Api for 2 sec
// => call Stack => next setTimeOut => get pushed => then get pushed to Node Api for 0 sec
// => call Stack => only main is in call stack now
// => now from Node Api  setTimeout 0 sec wait => added to callback Queue 
// => now event loop comes in picutre => event loop waits for call stack to be empty
// => if it is empty => it right away execute timeout method
// =X 
