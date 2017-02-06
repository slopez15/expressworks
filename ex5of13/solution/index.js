var port = process.argv[2];
var filePath = process.argv[3];
console.log('port: ' + port);
console.log('filePath: ' + filePath);

var express = require('express');
var app = express();

/**/
//1. FORM (non-AJAX)
app.use(require('stylus').middleware(filePath));
app.use(express.static(process.argv[3] || path.join('C:\\Users\\sauls\\AppData\\Roaming\\npm\\node_modules\\expressworks\\exercises\\stylish_css\\public') || '.' )
       ); 








app.listen(port || 3000);
