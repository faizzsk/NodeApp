var events=require("events")

// var EventEmitter =require("events");
// var eventemitter=new EventEmitter();


var eventEmitters=new events.EventEmitter()

var ringbell=function()
{
    console.log("ring ring ring")
}

eventEmitters.on("doorOpen",ringbell)
eventEmitters.on("bellrings",function(msg)
{
    console.log(msg);
})
eventEmitters.on("add",function(a,b){
    var sum=0;
    sum=a+b;
    console.log("Addition is "+sum);
});
console.log("A");
eventEmitters.emit("doorOpen")
console.log("B");
eventEmitters.emit("bellrings","Welcome")
console.log("C");
eventEmitters.emit('add',12,23);
console.log("D");

eventEmitters.on("readfile",()=>{


})
eventEmitters.on("completed",()=>{});

eventEmitters.emit("readfile");
eventEmitters.emit("completed");
