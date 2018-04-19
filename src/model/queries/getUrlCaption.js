const dbConnect = require("../database/db_connect");

const getUrlCaption = (photoId) => {

  return dbConnect.query(`SELECT url, caption FROM images WHERE id ='${photoId}'`)
  .then(res => res[0]);
};


module.exports = getUrlCaption; 