/*Express.js
remember to install express
express app to run locally on port provided as argv (process.argv[2])
with REST (rep state transfer), routes.
*/

/*
Vid Playlist: http://bit.ly/1jW1sBf    
//Kill Running node programs
    //taskkill /IM node.exe //kills all node tasks; 
        //IMPORTANT! run this before verifying (I noticed other excersices have problems if you don not kill node)
*/

//port provided by expressworks as first argv process.argv[2]
console.log(process.argv[2]);
//create express to run locally with REST
var express = require('express');
var app = express();
app.get('/home', function (req, res) {
    'use strict'; //don't know why brackets provide this suggestion
    res.end('Hello World!');
});
app.listen(process.argv[2]);







