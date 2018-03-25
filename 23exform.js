let express = require('express');
let app = express();
let path = require('path')
/*
To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
middleware from the body-parser module.
*/
let bodyparser = require('body-parser')
/*
Simply put, a middleware is a function invoked by Express.js before your own
request handler.

Middleware provide a large variety of functionality such as logging, serving
static files, and error handling.

A middleware is added by calling use() on the application and passing the
middleware as a parameter.
*/
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    let string = req.body.str.split('').reverse().join('')
    res.end(string)
});
app.listen(process.argv[2]);