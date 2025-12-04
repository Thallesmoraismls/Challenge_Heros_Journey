const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Choose your class:");
console.log("1 - Warrior");
console.log("2 - Mage");
console.log("3 - Archer");
console.log("4 - Paladin");

rl.question("Enter the number of your class: ", (chosenClass) => {
    const classes = {
        1: "Warrior",
        2: "Mage",
        3: "Archer",
        4: "Paladin"
    };

    if (!classes[chosenClass]) {
        console.log("Invalid class!");
        rl.close();
        return;
    }

    console.log(`\nYou chose the class: ${classes[chosenClass]}`);
    console.log("Now assign your attributes:");

    const attributes = ["Strength", "Intelligence", "Agility", "Defense", "Charisma"];
    let character = { class: classes[chosenClass] };
    let i = 0;

    const askAttribute = () => {
        if (i < attributes.length) {
            rl.question(`${attributes[i]}: `, (value) => {
                character[attributes[i]] = parseInt(value);
                i++;
                askAttribute();
            });
        } else {
            console.log("\n Welcome to the RPG!");
            console.log("Your character is ready:");
            console.log(character);
            rl.close();
        }
    };

    askAttribute();
});
