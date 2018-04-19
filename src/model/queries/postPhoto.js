const dbConnect = require('../database/db_connect');

const postPhoto = (url, caption) => {
  return dbConnect
    .query(`INSERT INTO photos (url, caption) VALUES ($1, $2)`, [url, caption])
    .then(() => console.log('REACHED'))
    .catch(console.log)
};

module.exports = {
  postPhoto,
};
