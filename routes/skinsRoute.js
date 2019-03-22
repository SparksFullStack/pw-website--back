const express = require('express');
const SkinsModel = require('../models/SkinsModel');

const router = express.Router();

router.get('/', (req, res) => {

});

router.post('/add_skin', (req, res) => {
    const { skin_image, skin_name, skin_link, buy_link, owners } = req.body;
    const newSkin = new SkinsModel({ skin_image, skin_name, skin_link, buy_link, owners });

    newSkin.save(err => {
        if (err) return res.status(500).json({ addSkinError: 'There was an error creating the new skin, please try again' });
        else res.status(200).json({ addSkinSuccess: "Skin successfully added!"});
    });
})

module.exports = router;