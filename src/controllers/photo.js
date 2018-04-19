const individualPhotoData = require ('./../model/queries/getIndividualPhoto');

exports.get = (req, res, next) => {
  const { id } = req.params;
  if (individualPhotoData.includes(id)) {
    return res.render('photo', { id });
  }
  next();
};
