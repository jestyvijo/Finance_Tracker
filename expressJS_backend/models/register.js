const mongoose = require('mongoose');

var Register = mongoose.model('Register', {
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    password: { type: String },
    cpassword: { type: String }
});

module.exports = { Register };