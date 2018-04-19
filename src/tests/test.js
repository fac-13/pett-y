const test = require('tape');
const request = require('supertest');
const routes = require('./../app.js');
const runDbBuild = require('../model/database/db_build.js');
const { getIndividualPhoto } = require('../model/queries/getIndividualPhoto');

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
    .get('/key')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

// testing for getindividualphoto

test('getIndividualPhoto returns an object', t => {
  runDbBuild().then(
    getIndividualPhoto(1).then(queryResult => {
      t.equals(
        typeof queryResult,
        'object',
        'type of queryResult should be object'
      );
      t.end();
    })
  );
});

test('testing that getIndividualPhoto returns an object with url and caption', t => {
  runDbBuild().then(
    getIndividualPhoto(1).then(queryResult => {
      t.deepEquals(
        Object.keys(queryResult),
        ['url', 'caption'],
        'queryResult should have url and caption keys'
      );
      t.end();
    })
  );
});
