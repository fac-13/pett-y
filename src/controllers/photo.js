const idList = ['1', '2', '3'];

exports.get = (req, res, next) => {
  const { id } = req.params;
  if (idList.includes(id)) {
    return res.render('photo', { id });
  }
  next();
};
