const Robot = require('../domain/robot');
let robot = null;

describe('robot', () => {

    beforeEach(() => {
        robot = new Robot(1, 1, 'N');
    });

    it('should properly initialize a robot object', () => {
        expect(robot.orientation).toBe('N');
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(1);
        expect(robot.lost).toBe(false);
    });

    it('should reset the current orientation', () => {

        robot.setOrientation('S');

        expect(robot.orientation).toBe('S');
    });

    describe('move', () => {
        it('should move the robot one point in current orientation', () => {
            robot.move();
            expect(robot.y).toBe(2);
            robot.move();
            expect(robot.y).toBe(3);
        });

        it('should move the robot one point in the new direction', () => {
            robot.move();
            expect(robot.y).toBe(2);

            robot.setOrientation('E');
            robot.move();
            
            expect(robot.x).toBe(2);
            expect(robot.y).toBe(2);
        });
    });

});