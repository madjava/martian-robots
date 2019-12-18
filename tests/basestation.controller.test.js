const request = require('supertest');
const app = require('../app');

const basestationCommands = {
    area: { top: 3, right: 5 },
    robots: [
        {
            position: { x: 1, y: 1, orientation: 'N' },
            instructions: ['F', 'R']
        },
    ]
}

describe('POST /basestation',  () => {
    it('responds with service instructions as json', (done) => {
        request(app)
            .post('/basestation')
            .send(basestationCommands)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should respond with correct data after executing commands', () => {
        const baseStationResponse = ['1 2 E'];
        return request(app)
            .post('/basestation')
            .send(basestationCommands)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                const data = response.body;
                expect(data).toEqual(baseStationResponse);
            });
    });

});