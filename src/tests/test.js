const test = require('tape');
const request = require('supertest');
const routes = require('./../app.js');
const runDbBuild = require('../model/database/db_build.js');
const { getIndividualPhoto } = require('../model/queries/getIndividualPhoto');
const { getAllPhotos } = require('./../model/queries/getRequests');

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

test('checks that query retrieves at least one url', t => {
  runDbBuild()
    .then(() => {
      return getAllPhotos();
    })
    .then(res => {
      t.deepEqual(
        res[0].url,
        'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/docatspurrwh.jpg',
        'Should return first URL'
      );
      t.end();
    })
    .catch(err => console.log(err));
});

test('checks if response is an object', t => {
  runDbBuild()
    .then(() => {
      return getAllPhotos();
    })
    .then(res => {
      t.equal(typeof res, 'object', 'The type of res should be an object');
      t.end();
    })
    .catch(err => console.log(err));
});
