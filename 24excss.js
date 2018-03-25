let express = require('express');
let app = express();
let path = require('path')
//You'll want to plug in some stylus middleware using app.use() again.
app.use(require('stylus').middleware(process.argv[3]))
/*
In addition to producing in the "STATIC" exercise, you'll need to serve static files.
Remember that middleware is executed in the order app.use is called!
*/
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2]);