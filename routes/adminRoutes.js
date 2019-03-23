const express = require('express');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AdminModel = require('../models/AdminModel');

const router = express.Router();
router.get('/', (req, res) => res.send('Admin router is live'));

router.post('/add_admin', (req, res) => {
    const { username, password } = req.body;

    const newAdmin = AdminModel({ username, password });
    newAdmin.save(err => {
        if (err) return res.send('there was an error');
        else return res.send('it worked');
    });
})


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    AdminModel.findOne({ username })
        .then(adminRecord => {
            console.log(adminRecord);
            if (!adminRecord) return res.status(404).json({ loginError: "Those credentials don't seem right, please check them and try again." });

            if (bcrypt.compareSync(password, adminRecord.password)) {
                JWT.sign({ username, password }, process.env.JWT_SECRET, { expiresIn: "24hr", algorithm: 'HS256' }, (err, token) => {
                    if (err) return res.status(500).json({ loginError: "There was an error when trying to generate a JWT for the user" });
                    res.status(200).json({ JWT: token });
                });
            } else res.status(401).json({ loginError: "The password provided didn't match the user record, please try again" });
        })
})

module.exports = router;