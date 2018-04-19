const idList = ['key', 'value', 'asdf'];

exports.get = (req, res) => {
  res.render('home', { idList });
};
