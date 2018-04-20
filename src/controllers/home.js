const { getAllPhotos } = require('./../model/queries/getAllPhotos');
const cookieSession = require('cookie-session');

exports.get = (req, res, next) => {
  req.session.loggedin = true;
  return getAllPhotos()
    .then(photoData => {
      res.render('home', { photoData });
    })
    .catch((err) => {
      console.log(err);
      next(err);
  });
  next();
};
