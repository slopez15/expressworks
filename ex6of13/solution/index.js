var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();

var crypto = require('crypto');
app.put('/message/:id', function (req, res) {
    var id = req.params.id;
    var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    res.send(str);
});
/*
//Below was part of bonus, but nothing to verify
app.param('id', function (req, res, next, id) {
  req.id = id;
  console.log("req: " + req.toString());
  console.log("res: " + res.toString());
  console.log("next: " + next);
  console.log("id: " + id);
  next();
});
app.get('/message/:id', function (req, res, next) {
    console.log("cmd: " + req.id);
    res.send("Entry: " + req.id);
    next();
});
/**/
