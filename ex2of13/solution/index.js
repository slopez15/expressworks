var path = require('path');

var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static(
    process.argv[3] || path.join('C:/Users/sauls/AppData/Roaming/npm/node_modules/expressworks/exercises/static/public')
));
/*app.get('/', function(req, res){
    res.end('Is this working? Yes dear sir.');
});
/*app.get('/home', function (req, res){
    res.end('Hello World!');
});*/









app.listen(port);