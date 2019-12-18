const Robot = require('../domain/robot');
const orientations = require('../domain/orientation');
const { moveCommands } = require('../domain/commands');

const proccesCommands = async (commands) => {
    if (!commands.area || !commands.robots || commands.robots.length === 0) {
        throw new Error('Invalid command received');
    }

    const robots = [];
    const { top, right } = commands.area;

    commands.robots.forEach((robotCommand) => {

        const { x, y, orientation } = robotCommand.position;
        const instructions = robotCommand.instructions;

        const robot = new Robot(x, y, orientation, top, right);
        instructions.forEach((instruction) => {
            switch (instruction) {
                case 'L':
                case 'R':
                    const newOrientation = orientations.change(robot.orientation, instruction);
                    robot.setOrientation(newOrientation);
                    break;
                case 'F':
                    robot.move();
                    break;
            }
        });

        robots.push(robot);
    });

    return robots.map(r => r.toString());;
}

module.exports = {
    proccesCommands
}