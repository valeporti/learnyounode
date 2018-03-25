const args = process.argv;
const net = require('net')
const strftime = require('strftime')
let server = net.createServer(function (socket) {
    /*
    const date = new Date()
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const hh = date.getHours();
    const mm = date.getMinutes();
    */
    const dateSt = strftime('%F %H:%M', new Date()) + '\n'
    socket.end(dateSt);
})
server.listen(args[2])