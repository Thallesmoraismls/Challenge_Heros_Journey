const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MagicItem {
  constructor(type, damage, resistance) {
    this.type = type;
    this.damage = damage;
    this.resistance = resistance;
  }

  calculateDamage() {
    return this.type.toLowerCase() === 'weapon' ? this.damage * 2 : this.damage;
  }
}

rl.question("Enter the item type: ", (itemType) => {
  rl.question("Enter the item damage: ", (itemDamage) => {
    rl.question("Enter the item resistance: ", (itemResistance) => {
      
      const customItem = new MagicItem(itemType, parseInt(itemDamage), parseInt(itemResistance));

      console.log("Type: " + customItem.type);
      console.log("Damage: " + customItem.damage);
      console.log("Resistance: " + customItem.resistance);

      const totalDamage = customItem.calculateDamage();
      console.log("Combat Damage: " + totalDamage);

      rl.close();
    });
  });
});
