const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Monster Level: ", function (Monster) {
    rl.question("Battle Difficulty: ", function (Difficulty) {
        rl.question("User Level Multiplier: ", function (Multiplier) {

            const XP = parseInt(Monster) * parseInt(Difficulty) * parseInt(Multiplier);

            console.log("You won " + XP + " XP!");

            rl.close();
        });
    });
});