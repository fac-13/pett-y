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

test('testing photo route for 200', t => {
  request(routes)
  .get('/photo/1')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('testing error route for 404', t => {
  request(routes)
  .get('/fdafdah4/32432')
  .expect(404)
  .expect('Content-Type', /html/)
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});
