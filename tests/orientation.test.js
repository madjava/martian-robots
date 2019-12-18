const orientation = require('../domain/orientation');

const commands = {
    right: 'R',
    left: 'L'
};


describe('change', () => {
    it('should return the correct diretion', () => {
        const currentOrientation = 'N';
        
        let newOrientation = orientation.change(currentOrientation, commands.right);
        expect(newOrientation).toBe('E');

        newOrientation = orientation.change(newOrientation, commands.right);
        expect(newOrientation).toBe('S');

        newOrientation = orientation.change(newOrientation, commands.left);
        expect(newOrientation).toBe('E');

        newOrientation = orientation.change(newOrientation, commands.left);
        expect(newOrientation).toBe('N');

        newOrientation = orientation.change(newOrientation, commands.left);
        expect(newOrientation).toBe('W');

  });
});

describe('isOrientationCommand', () => {
    it('should validate if the command is releated to orientation change request', () => {
        expect(orientation.isOrientationCommand('L')).toBe(true);
        expect(orientation.isOrientationCommand('R')).toBe(true);
        expect(orientation.isOrientationCommand('K')).toBe(false);
    })
});