const dir_name = process.argv[2];
const type = process.argv[3];
const fs = require('fs');
const path = require('path');
let content = fs.readdir(dir_name,function(err, list) {
    if (err) { return console.error(err) }
    list.filter(function(v, i, a) {
        //let last_4 = v.substr(v.length - 4, 3);
        if (path.extname(v) == '.' + type) { 
            console.log(v); 
        }
    }); 
});
