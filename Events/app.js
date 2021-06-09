var events = require("events")

var eventEmitter = new events.EventEmitter()


var ringbell = function()
{
    console.log("Ring...Ring...Ring");
}


eventEmitter.once("doorOpen",ringbell)

eventEmitter.on("doorclose",function(msg)
{
    console.log(msg);
})

eventEmitter.on("add",function(a,b){
    console.log(a+b);
})

console.log("start");

eventEmitter.emit("doorOpen")
eventEmitter.emit("doorclose","Bye Bye")
eventEmitter.emit("add",2,3)
eventEmitter.emit("doorOpen")

console.log("end");

//events = > synchronous
//