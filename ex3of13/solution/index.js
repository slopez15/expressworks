var path = require('path');

var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();
//app.set('views', path.join(__dirname, 'templates'));
app.set('views', path.join(filePath));
app.set('view engine', 'pug'); //default engine extension2use


/*
app.use(express.static('public'));
app.use(express.static(
    process.argv[3] || path.join('C:/Users/sauls/AppData/Roaming/npm/node_modules/expressworks/exercises/static/public')
));
/*
app.get('/', function(req, res){
    res.end('Is this working? Yes dear sir.');
});
/**/
app.get('/home', function (req, res){
//    res.end('Hello World!');
    res.render('index', {
        date: new Date().toDateString()
    }); //accepts template name and data (locals)
});
/**/









app.listen(port);

