let city = {
    _name: 'London',
    _population: 10000000,

    get name(){
        return this.name
    },

    get population(){
        return this._population
    },

    addPopulation(){
        this._population++;
    }
}

class City{
    constructor(name,country){
        this._name= name;
        this._population = 1000
        
        this._contry = country;
    }

    get name(){
        return this.name
    }

    get population(){
        return this._population
    }

    addPopulation(){
        this._population++;
    }
}

const london = new City('london')
undefined
london
City {_name: "london", _population: 1000, _contry: undefined}
const london = new City('london',)
VM372:1 Uncaught SyntaxError: Identifier 'london' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM372:1
const newyork = new City('Newyork','USA')
undefined
newyork
City {_name: "Newyork", _population: 1000, _contry: "USA"}


class Calculator{
    constructor(input1, input2){
        this.input1 = input1;
        this.input2 = input2;
    }

    add(){
        var out = this.input1+this.input2
        return out
    }

    sub(){
        var out = this.input1-this.input2
        return out
    }
}