const request = require('supertest');
const app = require('../app');

describe('GET /', function () {
    it('responds with service instructions as text', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type', /plain/)
            .expect(200, done);
    });
});