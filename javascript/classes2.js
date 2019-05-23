class Animal{
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
        this._legs = 10
    }

    get name(){
        return this.name
    }

    get breed(){
        return this._breed
    }

    get legs(){
        return this._legs
    }

}


class Dog extends Animal {
    constructor(name,breed,color){
        super(name,breed);
        this.color = color
    }  
}

var fluffy = new Dog()


var fluffy = new Dog()
undefined
fluffy
Dog {_name: undefined, _breed: undefined, _legs: 10, color: undefined}
var fluffy = new Dog('fluffy','pug','brown')
undefined
fluffy
Dog {_name: "fluffy", _breed: "pug", _legs: 10, color: "brown"}