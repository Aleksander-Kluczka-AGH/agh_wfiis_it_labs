var http = require('http');
var express = require('express');
var app = express();
var routes = require('./routes')(app);
http.createServer(app).listen(10007, function(){
                console.log('Express server listening on port ' + 10007);
});
