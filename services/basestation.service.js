
// const basestationCommands = {
//     area: { top: 3, right: 5 },
//     robots: [
//         {
//             position: { x: 1, y: 1, orientation: 'N' },
//             instructions: ['F', 'R']
//         },
//     ]
// };

const Robot = require('../domain/robot');
const orientations = require('../domain/orientation');

const proccesCommands = async (commands) => {
    if (!commands.area || !commands.robots || commands.robots.length === 0) {
        throw new Error('Invalid command received');
    }

    const robots = [];
    const { top, right } = commands.area;

    commands.robots.forEach((robotCommand) => {
        const { x, y, orientation } = robotCommand.position;
        const instructions = robotCommand.instructions;

        const robot = new Robot(x, y, orientation);

        instructions.forEach((instruction) => {
            if (orientations.isOrientationCommand(instruction)) {
                const newOrientation = orientations.change(robot.orientation, instruction);
                robot.setOrientation(newOrientation);
            } else {
                robot.move();
            }
        });
        robots.push(robot);
    });
    return robots.map(r => r.toString());;
}

module.exports = {
    proccesCommands
}