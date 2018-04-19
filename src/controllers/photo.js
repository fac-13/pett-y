const { getIndividualPhoto } = require ('./../model/queries/getIndividualPhoto');

exports.get = (req, res, next) => {
  const { id } = req.params;
  return getIndividualPhoto(id)
  .then(singlePhotoData => {
    console.log(singlePhotoData)
    res.render('photo', { singlePhotoData });
    console.log('in the then')
  }).catch(err => console.log(err))

  next();
};
