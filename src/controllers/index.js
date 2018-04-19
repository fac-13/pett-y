const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

const home = require('./home');
const photo = require('./photo');
const error = require('./error');
const { postPhoto } = require('../model/queries/postPhoto');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', home.get);
router.get('/photo/:id', photo.get);
router.post('/postphoto', (req, res, next) => {

  return postPhoto(req.body.url, req.body.review)
    .then(res.redirect('/'))
    .catch(console.log);

  next();
})
router.use(error.client);
router.use(error.server);

module.exports = router;
