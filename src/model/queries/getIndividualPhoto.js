const dbConnect = require('../database/db_connect');

const getIndividualPhoto = id => {
  return dbConnect
    .query('SELECT url, caption FROM photos WHERE id=$1', [id])
    .then(res => res[0]);
};

module.exports = {
  getIndividualPhoto
};
