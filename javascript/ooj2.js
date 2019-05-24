// constructor
var car = new Object();
undefined
typeof(car)
"object"
car.name="marc"
"marc"
car.color="silver"
"silver"
car
{name: "marc", color: "silver"}
car.name
"marc"
car['name']
"marc"
car['kms']=879878
879878
car
{name: "marc", color: "silver", kms: 879878}
delete car.color
true/
car
{name: "marc", kms: 879878}

//function
function add(a,b) {
    return a+b
}

// method
const add = function(a,b) {
    return a+b
}

var bob = new Object()
bob.age = 10
bob.color="white"
bob.setAge = function(newAge, color){
    bob.age = newAge;
    bob.color= color
}
ƒ (newAge, color){
    bob.age = newAge;
    bob.color= color
}
bob
{age: 10, color: "white", setAge: ƒ}
bob.age
10
bob.setAge(2)
undefined
bob
{age: 2, color: undefined, setAge: ƒ}
////////////
var tony = new Object()
tony.age = 20
tony.color="wheat"
tony.setAge = function(newAge, color){
    tony.age = newAge;
    tony.color= color
}

var createAge = function(newAge, color){
    this.age = newAge
    this.color = color
}

var bob = new Object()
bob.age = 10
bob.color="white"
bob.setAge = createAge

var tony = new Object()
tony.age = 10
tony.color="white"
tony.setAge = createAge


function database(){
    this.add= function(a,b){return a+b}
    this.sub = function(a,b){ return a-b}
    this.adddatabase = function(table,name){
        console.log(`Select * from ${table} where name = ${name}`)
    }
}


var sum = new database()
sum.add(1,2)
sum.sub(1,2)


var mathapp = new database()
mathapp.add(8,5)
mathapp.sub(4,5)