var homeController = {
    index: function (req, res) {
        res.render('home/index', {
            title: 'Bearing',
            message: 'Home',
            toUpperCase: function (value) {
                if (value !== undefined && value.toUpperCase !== undefined) {
                    return value.toUpperCase;
                }
            }
        });
    }
};

module.exports = homeController;