const { getAllPhotos } = require('./../model/queries/getAllPhotos');
const cookieSession = require('cookie-session');

exports.get = (req, res, next) => {
  req.session.loggedin = true;
  return getAllPhotos()
    .then(photoData => {
      if (photoData) {
        photoData.reverse();
      }
      if(req.session.justposted){
        req.session.justposted = false;
        let fadeInClass = ['fade-in'];
        let firstPhoto = photoData.shift();
      res.render('home', { photoData, firstPhoto, fadeInClass });
      } else { 
        res.render('home', { photoData });
      }
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
  next();
};
