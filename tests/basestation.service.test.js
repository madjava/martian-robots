const basestationService = require('../services/basestation.service');

const basestationCommands = {
    area: { top: 3, right: 5 },
    robots: [
        {
            position: { x: 1, y: 1, orientation: 'N' },
            instructions: ['F', 'R']
        },
    ]
};
const baseStationResponse = ['1 2 E'];

describe('proccesCommands', () => {
    it('should process basestation commands', async () => {
        const data = await basestationService.proccesCommands(basestationCommands);
        expect(data).toEqual(expect.arrayContaining(baseStationResponse));
    })
});