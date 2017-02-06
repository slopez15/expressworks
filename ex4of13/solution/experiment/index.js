//I only not like that uses another library (body-parser)
var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();

/**/
//1. FORM (non-AJAX)
//To parse x-www-form-urlencoded request bodies
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static('.')); //picks up index.html

app.post('/form', function(req, res){
    var str = req.body.str.split('').reverse().join(''); 
    res.send(str);
});




app.listen(port || 3000);