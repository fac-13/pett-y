const path = require('path');
const { QueryFile } = require('pg-promise');
const dbConnect = require("./db_connect.js");

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

// code below allows you to build a test db with extra data for tests
// if ((process.env.NODE_END = "test")) {
//   sql = fs.readFileSync(`${__dirname}/test_db_build.sql`).toString();
// } else {
//   sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
// }

const build = sql('./db_build.sql');

const runDbBuild = (callback) => {
  dbConnect
    .query(build)
    .then(res => {
      console.log('res', res);
      callback();
    })
    .catch(e => console.error('error', e));
};

//export function for testing
module.exports = runDbBuild;

