var fs = require("fs")

var events = require("events")

var eventEmitter = new events.EventEmitter()




var readFile = function () {
    fs.readFile("node.txt", (err, data) => {
        console.log(data.toString());
    })
}


eventEmitter.on("readFile", readFile)
eventEmitter.on("Completed", () => {
    console.log("Done Reading...................");
})


eventEmitter.emit("readFile")
eventEmitter.emit("Completed")
