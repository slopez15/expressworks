/*Express.js
remember to install express
express app on port provided in console (process.argv[2])

Vid: https://www.youtube.com/watch?v=C2IqQOLCCoU&list=PLguYmmjtxbWGwQRxXqMTQCj6FNb55aFVo
//taskkill /IM node.exe
    //kills all node tasks; IMPORTANT run this before verifying (I noticed other excersices have problems if you don not end a node)
*/

//define root modules //warned by jlint, that needed to be defined

var console = require("console");
var process = require("process");
var require = require("require");

console.log(process.argv[2]);
//port provided by expressworks as first argv process.argv[2]
//create express app on specified port
/*var express = require('express');
var app = express();
app.get('/', function (req, res) {
    'use strict'; //don't know why brackets provide this suggestion
    res.end('Hello World!');
});
app.listen(process.argv[2]);
*/






