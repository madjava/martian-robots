const basestationService = require('../services/basestation.service');

const basestationCommands = {
    area: { top: 3, right: 5 },
    robots: [
        {
            position: { x: 1, y: 1, orientation: 'N' },
            instructions: ['F', 'R']
        },
    ]
}

describe('proccesCommands', () => {
    it('should process basestation commands', () => {
        
    })
});