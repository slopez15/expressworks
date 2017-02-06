//file to work through all examples then placing into exFolders/solution; did this cause confusing with many comments; maybe note all on bottom after finish.
var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();







app.listen(port || 3000);
/* Below are scratch code from before, not exact.
/*
//noticed it is similar, but felt like require/middleware was only thing changed.
app.use(require('stylus').middleware(filePath));
app.use(express.static(process.argv[3] || path.join('C:\\Users\\sauls\\AppData\\Roaming\\npm\\node_modules\\expressworks\\exercises\\stylish_css\\public') || '.' )
       ); 
/*
//1. FORM (non-AJAX)
//To parse x-www-form-urlencoded request bodies
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    var str = req.body.str.split('').reverse().join(''); 
    res.send(str);
});
/*
//3. PUG
//app.set('views', path.join(__dirname, 'templates'));
app.set('views', path.join(filePath));
app.set('view engine', 'pug'); //default engine extension2use
/*
//2. Static
app.use(express.static('public'));
app.use(express.static(
    process.argv[3] || path.join('C:/Users/sauls/AppData/Roaming/npm/node_modules/expressworks/exercises/static/public')
));
/*
//1. REST
app.get('/', function(req, res){
    res.end('Is this working? Yes dear sir.');
});
/*
app.get('/home', function (req, res){
//    res.end('Hello World!');
    res.render('index', {
        date: new Date().toDateString()
    }); //accepts template name and data (locals)
});
/**/










/* Notes
IMPORTANT INFO FOR EX
2. C:\Users\sauls\AppData\Roaming\npm\node_modules\expressworks\exercises\static\public
    file = index.html
    if only use static, index.html is in '/' (i think)
    if use static and get '/', index.html is in /index.html
3. C:\Users\sauls\AppData\Roaming\npm\node_modules\expressworks\exercises\pug\templates
    file = index.pug
4. 
5. C:\Users\sauls\AppData\Roaming\npm\node_modules\expressworks\exercises\stylish_css\public





METHOD PRACTICE
path.join();
    path.join(''); = '.'

    path.join('/'); = '\\'
    path.join('', '/'); = '\\'
    path.join('C:/'); = 'C:\\'
    path.join('C:/Users/'); = 'C:\\Users\\'
    path.join('/user/bin'); = '\\user\\bin'

    path.join('\'); = invalid!
    path.join('C:\'); = invalid!
    path.join('C:\\'); = 'C:\\'
    path.join('C:\Users\'); = invalid!




*/
