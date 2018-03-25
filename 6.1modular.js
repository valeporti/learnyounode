let my_module = require('./6.2modular.js');

let args = process.argv;

my_module(args[2], args[3], function (err, data) {
    if (err) console.error(err);
    for (let i = 0; i < data.length; i ++) {
        console.log(data[i]);
    }
});