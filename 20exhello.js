let express = require('express');
let app = express();
app.get('/home', function(req, res) {
    res.end('Hello World!');
});
app.listen(process.argv[2]);

/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.listen(process.argv[2])
*/