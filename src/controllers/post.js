const { postPhoto } = require('./../model/queries/postPhoto');
const request = require('request');

exports.get = (req, res, next) => {
  return request(req.body.url, function(error, response, body) {
    if (response) {
      return postPhoto(req.body.url, req.body.review)
        .then(() => res.redirect('/'))
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
