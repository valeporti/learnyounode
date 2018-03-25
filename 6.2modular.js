module.exports = module1;
let fs = require('fs');


function module1(dir_name, ext, cb) {
    let regexp = new RegExp("." + ext + "\\b", 'i');
    fs.readdir(dir_name, function (err, data) {
        if (err) return cb(err);
        let list = data.filter(function (v) {
            return regexp.test(v);
        })
        cb(null, list)
    })
}