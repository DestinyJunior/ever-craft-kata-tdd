/**
 * Character 
 *      Has a name
 *      Has Alignments ['Good', 'Evil', 'Natural']
 */
const DEFAULTS_ALiGNMENTS = ['Good', 'Neutral', 'Evil'];
const DEFAULT_ARMOR_CLASS = 10
const DEFAULT_HIT_POINT = 5
class Character {

    constructor(name){
        this._name = name
        this._alignment = "Neutral"
        this._armor_class = DEFAULT_ARMOR_CLASS
        this._hit_point = DEFAULT_HIT_POINT
    }

    // get
    get name () { return this._name}

    // set name
    set name(name) {
        this._name = name
    }

    //  get alignment
    get alignment(){ return this._alignment}

    // set alignment
    set alignment(alignment){
        if(!DEFAULTS_ALiGNMENTS.includes(alignment)) throw `${alignment} is not a valid Alignment`
        this._alignment = alignment
    }

    get armorClass(){ return this._armor_class }

    get hitPoints() { return this._hit_point }


}

module.exports = Character;