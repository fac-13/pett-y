const test = require('tape');
const request = require('supertest');
const app = require('./../app.js');

test('testing home route has 200 status code', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
