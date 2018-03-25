let args = process.argv;
//console.log(args);
let port = args[2];
let http = require('http');
let url = require('url');
let server = http.createServer(function (request, response) {
    let strUrl = request.url;
    //console.log(reqUrl); //Ex: "/api/parsetime?iso=2017-03-15T06:43:16.327Z"
    let reqUrl = url.parse(strUrl, true);
    let ret;
    //console.log(url.parse(reqUrl, true));
    if (reqUrl.pathname == "/api/parsetime") {
        let time = reqUrl.query.iso;
        let parseTime = new Date(time) //Wed Mar 15 2017 07:03:42 GMT+0000 (UTC)
        //console.log(parseTime)
        ret = JSON.stringify({
            "hour": parseTime.getHours(),
            "minute": parseTime.getMinutes(),
            "second": parseTime.getSeconds()
        });
    } 
    else if (reqUrl.pathname == "/api/unixtime") {
        let time = reqUrl.query.iso;
        let parseTime = new Date(time)
        //console.log(parseTime.getTime());
        ret = JSON.stringify({
            "unixtime": parseTime.getTime()
        });
    } 
    else {
        console.log("Bizarre PathName");
    }
    
    if (ret) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(ret);
    } else {
        response.writeHead(404);
        response.end();
    }
    
});
server.listen(port);

/*
Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/