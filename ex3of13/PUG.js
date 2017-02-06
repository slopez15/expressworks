/*
path = process.argv[3] = 
    C:\Users\sauls\AppData\Roaming\npm\node_modules\expressworks\exercises\pug\templates
port = process.argv[2] = ??random??
*/

console.log("port: " + process.argv[2]);
console.log("path: " + process.argv[3]);
var express = require('express');
var app = express();
var pug = require('pug');
var path = require("path");


/*
app.use(express.static('public'));
app.use(express.static(process.argv[3]
//                       || path.join('C:\\Users\\sauls\\zProgramming\\GitHub\\nodeschool\\expressworks\\ex1of13\\public')
));
/**/
app.set('views', path.join(process.argv[3], 'index.pug')); //path to template files in folder templates
app.set('view engine', 'index.pug'); //tells wat template engine to use
app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()});
});









app.listen(process.argv[2]);
/*Notes IMPORTANT 
(last ex couldnt explain all parts due to bad docs.
Here, is good info from instructs
)
__dirname = absolute path of this file and 
path.join = to make cross-platform path (Win vs. Linux/Mac).


*/

























