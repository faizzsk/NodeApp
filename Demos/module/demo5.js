//exports is an object. So, 
//you can attach properties or methods to it.
exports.simpleMsg="exporting using export Object";
module.exports.log = function (msg) { 
    console.log(msg);
};