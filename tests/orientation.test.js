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

;    });
});