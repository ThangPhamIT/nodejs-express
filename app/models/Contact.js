var db = require('./db');

var Contact = {
    create: function (contact, callback) {
        db.query('INSERT INTO public."Contact"(name, email, message) VALUES ($1, $2, $3)', 
        [contact.name, contact.email, contact.message], function (err, result) {
            callback(err);
        });
    }
};

module.exports = Contact;