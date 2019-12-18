const { commands, orientationCommands } = require('./commands');

const orientationChange = {
    N: { L: 'W', R: 'E' },
    E: { L: 'N', R: 'S' },
    S: { L: 'E', R: 'W' },
    W: { L: 'S', R: 'N' }
}

const change = (currentOrientation, direction) => {
    return orientationChange[currentOrientation][direction]
};

const isOrientationCommand = (command) => {
    return orientationCommands.includes(command);
}

module.exports = {
    change,
    isOrientationCommand
}