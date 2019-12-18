const basestationService = require('../services/basestation.service');

describe('proccesCommands', () => {
    let basestationCommands = null;
    let baseStationResponse = null;

    describe('When robot is withing area', () => {
        beforeEach(() => {
            basestationCommands = {
                area: { top: 3, right: 5 },
                robots: [
                    {
                        position: { x: 1, y: 1, orientation: 'E' },
                        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
                    },
                    {
                        position: { x: 3, y: 2, orientation: 'N' },
                        instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L']
                    },
                    {
                        position: { x: 0, y: 3, orientation: 'W' },
                        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L']
                    }
                ]
            };
            baseStationResponse = ['1 1 E', '3 4 N LOST', '3 4 S LOST'];
        });

        it('should process basestation commands', async () => {
            const data = await basestationService.proccesCommands(basestationCommands);
            expect(data).toEqual(expect.arrayContaining(baseStationResponse));
        });
    });
});