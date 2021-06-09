console.log(__dirname)
console.log(__filename)

function printStuff()
{
    console.log("This function is get call after 5 sec");
}
setTimeout(printStuff,5000);
setInterval(printStuff,2000);