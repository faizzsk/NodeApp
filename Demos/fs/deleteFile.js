var fs = require('fs');

fs.unlink('demo.txt',  ()=> {
    
    console.log('deleted');

});