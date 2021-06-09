function add(a,b,callback)
{
    var res=a+b;
    console.log("Addition is "+res);
    callback();
}
function sayHello()
{
    setTimeout(function(){
        console.log("Say Hi after 5 sec");
    },5000)
    
}
console.log(sayHello);
add(5,6,sayHello);

add(10,20,function(){
    console.log("Another call using Anonymous way ...");
})
add(4,5,()=>{
    console.log("Another call using ()=>) way ...")
});
// callback=function(){
//     console.log("Another call using Anonymous way ...");
// };
