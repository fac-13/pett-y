const getUrlCaption = require('../model/queries/getUrlCaption');

exports.get = (req, res, next) => {
  const { photoId } = req.params;

  return getUrlCaption(photoId)
  .then(urlCaption => res.render('photo', { urlCaption }));

  // console.log('is photo undefined?(photo controller', photo);
  // if (photoList.includes(photo)) {
  // }
  next();
};
