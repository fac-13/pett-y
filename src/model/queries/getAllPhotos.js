const dbConnect = require("../database/db_connect");

const getAllPhotos = () => {

  return dbConnect.query(`SELECT id, url, caption FROM images`)
  .then(res => res);
};


module.exports = getAllPhotos; 