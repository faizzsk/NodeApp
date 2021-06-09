var fs = require('fs');

fs.appendFile('demo.txt', 'How are you...........!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append  complete.');
});