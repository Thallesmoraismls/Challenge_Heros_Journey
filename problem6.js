const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function combinePokemonNames(word) {
    let pokemonWord = word + "saur";
    return pokemonWord;
}

rl.question("Enter a word: ", (inputName) => {
    let generatedWord = combinePokemonNames(inputName);
    console.log(generatedWord);
    rl.close();
});
