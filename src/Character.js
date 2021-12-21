/**
 * Character 
 *      Has a name
 *      Has Alignments ['Good', 'Evil', 'Natural']
 */
class Character {

    constructor(){
        this._name = ""
        this._alignment = "Neutral"
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
        this._alignment = alignment
    }
}

module.exports = Character;