//var Router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function (app) {
    app.get('/', controllers.home.index);
    app.get('/albums', controllers.albums.index);
    app.get('/photos', controllers.photos.index);
    app.get('/groupteam', controllers.about.groupTeam);
    app.post('/groupteam', controllers.about.insertMember);
    app.get('/contact', controllers.contact.index);
    app.post('/contact', controllers.contact.contact);

    // var homeRoutes = Router()
    //     .get('/', controllers.home.index);
    // var albumsRoutes = Router()
    //     .get('/', controllers.albums.index);
    // var photosRoutes = Router()
    //     .get('/', controllers.photos.index);
    //     //.get('/:id', controllers.photos.showDetail);
    // var contactRoutes = Router()
    //     .get('/', controllers.contact.index)
    //     .post('/', controllers.contact.contact);

    // var aboutRoutes = Router()
    //     .get('/', controllers.about.groupTeam)
    //     .post('/', controllers.about.insertMember);

    // app.use('/', homeRoutes);
    // app.use('/albums', albumsRoutes);
    // app.use('/photos', photosRoutes);
    // app.use('/groupteam', aboutRoutes);
    // app.use('/contact', contactRoutes);
}