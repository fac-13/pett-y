const { postPhoto } = require('./../model/queries/postPhoto');
const request = require('request');
const cookieSession = require('cookie-session');


exports.get = (req, res, next) => {
  return request(req.body.url, function(error, response, body) {
    if (response) {
      return postPhoto(req.body.url, req.body.review)
        .then(() => {
          req.session.justposted = true;    
          res.redirect('/')
        })
        .catch(err => {
          console.log(err);
          next(err);
        });
      next();
    } else {
      res.redirect('/');
    }
  });
};
