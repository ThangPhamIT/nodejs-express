var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
// config
require('./config/index')(app);
// create port listener
app.listen(port, function () {
    console.log('Web is runnig on port: ' + port);
});