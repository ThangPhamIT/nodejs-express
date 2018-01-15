var exphbs = require('express-handlebars');
var path = require('path');

var helpers = require('../app/helpers/helpers');

module.exports = function (app) {
    // set view engine handlebars and default layout
    app.engine('hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'application',
        layoutsDir: path.resolve('app/views/layouts/'),
        partialsDir: path.resolve('app/views/partials'),
        helpers: helpers
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve('app/views'));
};