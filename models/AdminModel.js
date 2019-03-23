const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const AdminModel = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
});

AdminModel.pre('save', function(next) {
    return bcrypt
        .hash(this.password, salt)
        .then(hash => {
        this.password = hash;
        return next();
        })
        .catch(err => {
        return next(err);
        });
})

module.exports = mongoose.model('admin', AdminModel);