const { Character }  = require('../index');


// describe character
describe("Character",  () =>{ 

    let character;
    const characterName = "";

    beforeEach(() => {
        character = new Character()
    });

    describe("character name", () => {

        // name should be string
        it("should be a string", () => {
            expect(character.name).toBe("")
        })

        //name can be set
        it("can be changed/set", () => {
            character.name = "Destiny"
            expect(character.name).toBe("Destiny");
        })
    })

    describe("character alignment", () => {

        // get default alignment
        it("should default to Neutral", () => {
            expect(character.alignment).toBe("Neutral")
        })

        // iterates each alignment type
        it.each([
            ["Good"],
            ["Neutral"],
            ["Evil"],
        ])("can be %s",(alignment) => {
            character.alignment = alignment
            expect(character.alignment).toBe(alignment);
        })

        // reject invalid alignment
        it("reject non default values for alignment", () => {
            expect(() => {
                character.alignment = "Wicked"
            }).toThrow("Wicked is not a valid Alignment");
        })
    })
})