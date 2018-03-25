const args = process.argv;

const http = require('http')
const strftime = require('strftime')
const fs = require('fs')

let server = http.createServer(function (req, res) {
    /*
The fs core module also has some streaming APIs for files. You will need
  to use the fs.createReadStream() method to create a stream representing
  the file you are given as a command-line argument. The method returns a
  stream object which you can use src.pipe(dst) to pipe the data from the
  src stream to the dst stream. In this way you can connect a filesystem
  stream with an HTTP response stream.
    */
    let streamed = fs.createReadStream(args[3])
    let pide_data = streamed.pipe(res)
})
server.listen(args[2])