const args = process.argv

const http = require('http')
const bl = require('bl')

http.get(args[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) console.error(err)
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
    response.on('error', function(err) {
        if (err) console.error(err)
    })
}).on('err', console.error)