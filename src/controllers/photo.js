const photoList = {};

exports.get = (req, res, next) => {
  const { photo } = req.params;
  console.log('is photo undefined?(photo controller', photo);
  if (photoList.includes(photo)) {
    return res.render('photo', { photo });
  }
  next();
};
