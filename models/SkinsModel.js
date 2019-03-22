const mongoose = require('mongoose');

const SkinModel = mongoose.Schema({
    skin_image: {
        type: String,
        required: true,
    },
    skin_name: {
        type: String,
        required: true
    },
    skin_link: {
        type: String,
        required: true
    },
    buy_link: {
        type: String,
        required: true
    },
    owners: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('skins', SkinModel);