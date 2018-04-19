const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const photo = require('./photo');
const error = require('./error');

router.get('/', home.get);
router.get('/:photoId', photo.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
