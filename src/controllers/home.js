const photoList = {};

exports.get = (req, res) => {
  res.render('home', { photoList });
};
