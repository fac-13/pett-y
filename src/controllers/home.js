const getAllPhotos = require('../model/queries/getAllPhotos');

exports.get = (req, res) => {

  return getAllPhotos()
  .then(photoList => res.render('home', { photoList }));

};
