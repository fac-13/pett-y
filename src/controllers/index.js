const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('env2')('./config.env');


const home = require('./home');
const photo = require('./photo');
const post = require('./post');
const error = require('./error');



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(
  cookieSession({
    name: 'session',
    secret: process.env.SECRET
  })
);

router.get('/', home.get);
router.get('/photo/:id', photo.get);
router.post('/postphoto', post.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
