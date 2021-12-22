const { Attack, Character } = require("../index");



describe("Attack", () => {

    let attacker = new Character("Player1");
    let defender = new Character("Player2");

    // tests
    let roll;
    let attack = new Attack(attacker, defender)


    describe("Attack opponent armor class and hit", () => {

        it("Meet defender armor class", () => {
            roll = 10;
            expect(attack.fight(roll)).toBe(`${attacker.name} meets ${defender.name}'s hit class of ${defender.armorClass}`)
        })

        // attacker beats opponent's armor class
        it("Beat defender armor class", () => {
            roll = 15;
            expect(attack.fight(roll)).toBe(`${attacker.name} beats ${defender.name}'s hit class of ${defender.armorClass}`)
        })

        // does not meet or beats
        it("Does not meet or beat opponent", () => {
            roll = 9;
            expect(attack.fight(roll)).toBe("Roll does not meet or beat your opponent's  armor class, try again")
        })

        // natural hit with a roll of 20

        it("Hit when roll is 20", () => {
            roll = 20
            expect(attack.fight(roll)).toBe(`${attacker.name} beats ${defender.name}'s hit class of ${defender.armorClass}`)
        })
    })
})