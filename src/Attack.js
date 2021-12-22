

class Attack {

    constructor(attacker, defender) {
        this.attacker = attacker
        this.defender = defender
    }


    fight(roll) {
      let defenderArmorClass = this.defender.armorClass
      let attackerArmorClass = this.attacker.armorClass

      if(roll == defenderArmorClass) {
        // roll meets defender hit class
        return `${this.attacker.name} meets ${this.defender.name}'s hit class of ${defenderArmorClass}`
      } else if(roll > defenderArmorClass || roll == 20) {
        // roll beats defender hit class
        return `${this.attacker.name} beats ${this.defender.name}'s hit class of ${defenderArmorClass}`
      }

      return "Roll does not meet or beat your opponent's  armor class, try again"
    }
}


module.exports = Attack