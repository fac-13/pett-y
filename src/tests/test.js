const test = require('tape');
const request = require('supertest');
const routes = require('./../app.js');

test('testing home route has 200 status code', t => {
  request(routes)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
