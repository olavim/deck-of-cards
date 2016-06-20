var config = require("./config");
var express = require("express");
var app = express();

app.use('/', express.static(config.webDir));

app.listen(config.clientPort, function() {
    console.log('Client listening on port ' + config.clientPort);
});