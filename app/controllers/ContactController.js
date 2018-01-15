var Contact = require('../models/Contact');

// create function
var isNotEmpty = function (value) {
    return value && value.trim() !== "" || value.length !== 0;
};

var contactController = {
    index: function (req, res) {
        res.render('contact/index', {
            title: 'Bearing',
            message: 'Hi, contact us.'
        });
    },
    
    contact: function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(message)) {
            Contact.create({
                name: name,
                email: email,
                message: message
            }, function (err) {
                if (err) {
                    res.render('contact/index', {
                        title: 'Contact',
                        message: 'Error... :(',
                        detailMessages: {
                            error: 'Please contact us later.'
                        }
                    });
                } else {
                    res.render('contact/index', {
                        title: 'Contact',
                        message: 'Yeah... :)',
                        detailMessages: {
                            success: 'Your message is sent. We will contact you soon.'
                        }
                    });
                }
            });
        } else {
            res.render('contact/index', {
                title: 'Contact',
                message: 'Sad... :(',
                detailMessages: {
                    error: 'Your field cannot be empty.'
                }
            });

        }
    }
};

module.exports = contactController;