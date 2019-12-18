const Robot = require('../domain/robot');


describe('robot', () => {

    it('should properly initialize a robot object', () => {
        const robot = new Robot(1, 1, 'N');

        expect(robot.orientation).toBe('N');
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(1);
    });

});