const path = require('path');
const { QueryFile } = require('pg-promise');
const dbConnect = require('./db_connect.js');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

let build;

// // code below allows you to build a test db with extra data for tests
if ((process.env.NODE_END = "testpetty")) {
  build = sql('./test_db_build.sql');
} else {
  build = sql('./db_build.sql');
}

const runDbBuild = () => {
  return dbConnect
    .query(build)
    .then()
    .catch(e => console.error('error', e));
};

//export function for testing
module.exports = runDbBuild;
