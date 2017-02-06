var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.end('Is this working? Yes dear sir.');
});
app.get('/home', function (req, res){
    res.end('Hello World!');
});
app.listen(process.argv[2]);



