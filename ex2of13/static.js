/*static.js
serve static assets (ex: html) applying static middleware
not using routes like app.get

process.argv[2] = port
process.argv[3] = file path

Can create logical condition OR to use 
    the CLI argument value or fallback to 
    the absolute path to the public folder. 
        The path is constructed with path.join():

//folderName = public, assume in same folder as main script (this)
app.use(express.static('public'));

*/
console.log("path: " + process.argv[3]);
var express = require('express');
var app = express();
//adding middleware to global processing stack

app.use(express.static('public'));

app.use(express.static(process.argv[3]
//                       || path.join('C:\\Users\\sauls\\zProgramming\\GitHub\\nodeschool\\expressworks\\ex1of13\\public')
));
app.listen(process.argv[2]);





/* Notes / Examples
mainApp = express();
subApp = express();
subApp.get('/path', function(req,res){
    //code
    res.send('');
});
mainApp.use(['/sub', '/subSimilarName'], sub);

//docs
app.use([path,] callback [, callback...])
    path = string, pattern, expressions, array
    callback = middleware func, varargs, array of middleware; router and app implement middleware interface.
    ex:
        app.use('/path', func(req,res){})
        app.use('/path', sub){})
with express.static
    // GET /static/style.css etc.
    app.use('/static', express.static(__dirname + '/public'));
    express.static(root, [options])
    
*/


/*
Vid Playlist: http://bit.ly/1jW1sBf    
//Kill Running node programs
    //taskkill /IM node.exe
*/





















