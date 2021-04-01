const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  mage,
  warrior,
  dragon
};

const dragonDmg = (str) => {
  battleMembers.dragon.damage = Math.ceil(Math.random() * (str - 15) + 15);
}

const warriorDmg = (str, wpnDmg) => {
  battleMembers.warrior.damage = Math.ceil(Math.random() * (str * wpnDmg) + str);
}

const mageDmg = (int) => {
  if (battleMembers.mage.mana >= 15) {
    battleMembers.mage.damage = Math.ceil(Math.random() * (int * 2) + int);
    battleMembers.mage.mana = battleMembers.mage.mana - 15; 
  } else {
    battleMembers.mage.damage = `Mana insuficiente: ${battleMembers.mage.mana}`;
    battleMembers.mage.mana = battleMembers.mage.mana;
  }
}


warriorDmg(battleMembers.warrior.strength, battleMembers.warrior.weaponDmg)
mageDmg(mage.intelligence)
dragonDmg(battleMembers.dragon.strength);

console.log(battleMembers)