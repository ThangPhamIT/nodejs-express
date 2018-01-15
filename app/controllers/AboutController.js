var Member = require('../models/Member');

var isNotEmpty = function (value) {
    return value && value.trim() !== "" || value.length !== 0;
};

var aboutController = {
    groupTeam: function (req, res) {
        Member.getAllMembers(function (err, members) {
            res.render('abouts/groupteam', {
                title: 'Bearing',
                message: 'Group Team',
                members: members
            });
        });
    },
    
    insertMember: function (req, res) {
        var fullname = req.body.fullname;
        var project = req.body.project;
        var position = req.body.position;

        if (isNotEmpty(fullname) && isNotEmpty(project) && isNotEmpty(position)) {
            Member.insertMember({
                fullname: fullname,
                project: project,
                position: position
            }, function (err) {
                if (err) {
                    res.render('abouts/groupteam', {
                        title: 'Group Team',
                        message: 'Error... :(',
                        detailMessages: {
                            error: 'Please insert member again.'
                        }
                    });
                } else {
                    res.render('abouts/groupteam', {
                        title: 'Group Team',
                        message: 'Yeah... :)',
                        detailMessages: {
                            success: 'Insert member succeessfuly.'
                        }
                    });
                }
            });
        } else {
            res.render('abouts/groupteam', {
                title: 'Group Team',
                message: 'Sad... :(',
                detailMessages: {
                    error: 'Your field cannot be empty.'
                }
            });

        }
    }
};

module.exports = aboutController;