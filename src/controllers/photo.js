const photoList = ['key', 'value', 'asdf'];

exports.get = (req, res, next) => {
  const { photo } = req.params;
  if (photoList.includes(photo)) {
    return res.render('photo', { photo });
  }
  next();
};
