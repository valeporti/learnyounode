//module
let fs = require('fs');
/*
Documentation on the fs module can be found by pointing your browser here:
  file://C:\Users\valep\AppData\Roaming\npm\node_modules\learnyounode\node_a
  pidoc\fs.html
  */
//get pathtofile
let path = process.argv[2];

let buff = fs.readFileSync(path);

//convert buffer to string
let str = buff.toString();

let lines = str.split('\n');

console.log(lines.length - 1);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1