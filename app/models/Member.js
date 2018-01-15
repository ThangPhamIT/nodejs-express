var db = require('./db');

var Member = {
    getAllMembers: function (callback) {
        db.query('SELECT * FROM public."Member"', [], function (err, result) {
            console.log((result.rows[0]));
            callback(err, [result.rows[0], result.rows[1]]);
        });
    },

    insertMember: function (member, callback) {
        db.query('INSERT INTO public."Member"(fullname, project, position) VALUES ($1, $2, $3)', 
        [member.fullname,  member.project, member.position], function (err, result) {
            callback(err);
        });
    }
};


module.exports = Member;