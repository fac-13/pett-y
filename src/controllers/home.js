const { getAllPhotos } = require('./../model/queries/getAllPhotos');

exports.get = (req, res) => {
  return getAllPhotos()
  .then(photoData => {
    res.render('home', { photoData })})
    .catch(err => console.log(err));
};
