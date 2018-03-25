let fs = require('fs');
let path = process.argv[2];
let content = fs.readFile(path,function(err, data) {
    if (err) { return 'error'; }
    let str = data.toString();
    let lines = str.split('\n');
    console.log(lines.length - 1); 
});

