console.log("user 1 makes a request")
setTimeout(callback,2000);
console.log("hi");


console.log("user 2 makes a request")
setTimeout(callback,2000);
console.log("hello");


console.log("user 3 makes a request")
setTimeout(callback,2000)
console.log("how r u");


function callback()
{
    console.log("Queried the database and delivered data in 2 Sec");
}