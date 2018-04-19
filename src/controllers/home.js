const idList = ['1', '2', '3'];

exports.get = (req, res) => {
  res.render('home', { idList });
};
