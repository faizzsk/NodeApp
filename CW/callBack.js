console.log("user 1 makes a request")
setTimeout(callback, 3000);
console.log("Hi...");

console.log("user  2 makes a request")
setTimeout(callback1, 3000);
console.log("Hello");

console.log("user 3 makes a request")
setTimeout(callback2, 3000);
console.log("Faizzz...");

function callback() {
    console.log("I am in callback")
}

function callback1() {
    console.log("I am in callback One")
}

function callback2() {
    console.log("i am in callback Two")
}