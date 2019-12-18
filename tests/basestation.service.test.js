const basestationService = require('../services/basestation.service');

describe('proccesCommands', () => {
    let basestationCommands = null;
    let baseStationResponse = null;

    beforeEach(() => {
        basestationCommands = {
            area: { top: 3, right: 5 },
            robots: [
                {
                    position: { x: 0, y: 3, orientation: 'W' },
                    instructions: ['L','L','F','F','F','L','F','L','F','L']
                },
            ]
        };
        baseStationResponse = ['2 3 S'];

    });

    it('should process basestation commands', async () => {
        const data = await basestationService.proccesCommands(basestationCommands);
        expect(data).toEqual(expect.arrayContaining(baseStationResponse));
    })
});