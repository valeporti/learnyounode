const args = process.argv;

const http = require('http')
const strftime = require('strftime')
const fs = require('fs')
const map = require('through2-map');

let server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
})
server.listen(args[2])