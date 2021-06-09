/*function printStuff(msg)
{
    console.log(msg);

}*/

//writting Anonymous function
/*
var printStuff=function(msg)
{
    console.log(msg);
}*/
//printStuff("Jayshree");
function mainFunction(anotherfn,value)
{
    anotherfn(value);
}
//mainFunction(printStuff,"Jayshree Chaudhary")
mainFunction(function(stuff){console.log(stuff)},"Anant Chaudhary")