const args = process.argv
let funcs = [];
for (let a = 2; a < args.length; a ++ ) 
{
    funcs.push(function(cb) {
        http.get(args[a], function (response) {
            response.pipe(bl(function (err, data) {
                if (err) console.error(err)
                data = data.toString();
                //console.log(data);
                cb(null, data);
            }))
            response.on('error', function(err) {
                if (err) console.error(err)
            })
        }).on('err', console.error)
    })
}
const http = require('http')
const bl = require('bl')
const async = require('async')
const arr = [];


async.parallel(funcs, function(err, results) {
    for (let i = 0; i < results.length; i ++) {
        console.log(results[i]);
    }
})

//OFFICIAL SOLUTION
/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

*/