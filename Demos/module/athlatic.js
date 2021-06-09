function relay()
{
    console.log("This is reply function")
}
function longJump()
{
    console.log("This is longJump function")
}
module.exports.relay=relay
module.exports.longJump=longJump

module.exports={
    relay:function()
    {
        console.log("This is reply function");
    },
    longJump:function()
    {
        console.log("Long jump function")
    }
}
