const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("The hero's starting position in the forest: ", function (initialposition) {
    rl.question("The total number of steps the hero must take: ", function (totalSteps) {

        let finalPosition = parseInt(initialposition) + parseInt(totalSteps);

        console.log("Hero's final position:", finalPosition);

        rl.close();
    });
});
