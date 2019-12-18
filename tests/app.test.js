const request = require('supertest');
const app = require('../app');

describe('GET /',  () => {
    it('responds with service instructions as text', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /plain/)
            .expect(200, done);
    });
});

describe('GET /nonexist', () => {
    it('responds with 404 Not Found', (done) => {
        request(app)
            .get('/nonexist')
            .expect(404, done);
    });
});