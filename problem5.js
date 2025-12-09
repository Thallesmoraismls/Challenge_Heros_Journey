const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of hits: ", (input) => {
    const numberOfHits = parseInt(input);

    let minerals = ["Coal", "Iron", "Diamond", "Stone"];

    for (let i = 1; i <= numberOfHits; i++) {
        let mineIndex = (i - 1) % minerals.length;
        console.log(i + ": " + minerals[mineIndex]);
    }

    rl.close();
});
