const dbConnect = require('../database/db_connect.js');

const getAllPhotos = () => {
  return dbConnect.query('SELECT id, url FROM photos')
  .then((res) => res)
  .catch((err) => console.log(err));
}

module.exports = { getAllPhotos };