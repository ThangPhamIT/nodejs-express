var db = require('./db');

var Image = {
    findAll: function (callback) {
        // db.connect(function (err, client, done) {
        //     console.log('Connecting database...');
        //     db.query('SELECT id, name, url FROM public."Photos"', [], function (err, result) {
        //         done(err); // close connection
        //         console.log(JSON.stringify(result));
        //         callback(err, result.rows);
        //     });
        // });
        db.query('SELECT id, name, url FROM public."Photos"', [], function (err, result) {
            console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    },

    search: function (keyword, callback) {
        db.query('SELECT id, name, url FROM public."Photos" where name like $1', ['%'+keyword+'%'], function (err, result) {
            console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    }
};

module.exports = Image;