module.exports = function (app) {
    // middle ware libs
    require('./middlewares')(app);
    // views
    require('./views')(app);
    // controller
    require('./routes')(app);
}