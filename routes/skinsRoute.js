const express = require('express');
const SkinsModel = require('../models/SkinsModel');

const router = express.Router();

router.get('/', (req, res) => res.send('The skins router is live'));

module.exports = router;