var Image = require('../models/Image');

var albumsController = {
    index: function (req, res) {
        Image.findAll(function (err, images) {
            res.render('albums/index', {
                title: 'Bearing',
                message: 'Album',
                images: images
            });
        });
    }
};

module.exports = albumsController;