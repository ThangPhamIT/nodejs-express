var Image = require('../models/Image');

var photosController = {
    // create method index()
    index: function (req, res) {
        var keyword = req.query.keyword;
        Image.search(keyword, function (err, images) {
            res.render('photos/index', {
                title: 'Bearing',
                message: 'Photo Detail',
                images: images,
                isNoResults: images.length === 0
            });
        }); 
    }
};

module.exports = photosController;