
// const basestationCommands = {
//     area: { top: 3, right: 5 },
//     robots: [
//         {
//             position: { x: 1, y: 1, orientation: 'N' },
//             instructions: ['F', 'R']
//         },
//     ]
// };

const proccesCommands = async (commands) => {
    if(!commands.area || !commands.robots || commands.robots.length === 0) {
        throw new Error('Invalid command received');
    }
    return null;
}

module.exports = {
    proccesCommands
}