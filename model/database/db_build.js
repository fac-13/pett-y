const fs = require("fs");

const dbConnect = require("./db_connect.js");

sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// code below allows you to build a test db with extra data for tests
// if ((process.env.NODE_END = "test")) {
//   sql = fs.readFileSync(`${__dirname}/test_db_build.sql`).toString();
// } else {
//   sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
// }

const runDbBuild = cb => {
dbConnect.query(sql, (err, res) => {
  if (err) return cb(err);
  console.log("stackmatch db built");
  cb(null, res);
});
}

//export function for testing
module.exports = runDbBuild;

