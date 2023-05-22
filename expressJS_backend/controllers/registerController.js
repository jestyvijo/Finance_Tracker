const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Register } = require('../models/register');

// => localhost:3000/register/
router.get('/', (req, res) => {
    Register.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Register :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/check', (req, res) => {
    var emp = new Register({
        email: req.body.email,
        password: req.body.password,
    });
    Register.find({ $and: [{email:req.body.email},{password:req.body.password}]},(err, docs) => {
        if (!err) {  res.send(docs); }
        else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;