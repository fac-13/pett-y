const { getIndividualPhoto } = require('./../model/queries/getIndividualPhoto');

exports.get = (req, res, next) => {
  const { id } = req.params;
  return getIndividualPhoto(id)
    .then(singlePhotoData => {
      res.render('photo', { singlePhotoData });
    })
    .catch(err => console.log(err));

  next();
};
