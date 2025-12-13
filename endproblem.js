const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type.toLowerCase(); 
  }

  attack() {
    let attackMove;

    switch (this.type) {
      case "mage":
        attackMove = "magic";
        break;
      case "warrior":
        attackMove = "sword";
        break;
      case "monk":
        attackMove = "martial arts";
        break;
      case "ninja":
        attackMove = "shuriken";
        break;
      default:
        attackMove = "an unknown skill";
    }

    console.log(`The ${this.type} attacked using ${attackMove}`);
  }
}

rl.question("Enter hero name: ", (name) => {
  rl.question("Enter hero age: ", (age) => {
    rl.question("Enter hero type (mage, warrior, monk, ninja): ", (type) => {
      
      const hero = new Hero(name, parseInt(age), type);

      hero.attack();

      rl.close();
    });
  });
});
