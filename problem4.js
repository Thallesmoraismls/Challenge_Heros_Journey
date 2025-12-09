const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const roomsWithTreasure = [2, 4, 7];
const roomsWithMonster = [3, 6, 8];

rl.question('Enter the total number of rooms: ', (answer) => {
    const totalRooms = parseInt(answer);

    for (let room = 1; room <= totalRooms; room++) {
        const hasTreasure = roomsWithTreasure.includes(room);
        const hasMonster = roomsWithMonster.includes(room);

        if (hasTreasure) {
            console.log("Treasure in room " + room + "!");
        }
        if (hasMonster) {
            console.log("Monster in room " + room + "!");
        }
    }

    rl.close();
});
