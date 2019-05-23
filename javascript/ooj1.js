// literal notation
let john = {
    firstname: 'John',
    lastname: 'Andy',
    city: 'New York',
    job: 'Software'
}
undefined
john
{firstname: "John", lastname: "Andy", city: "New York", job: "Software"}
typeof(john)
"object"
john.firstname
"John"
john.city
"New York"
john['city']
"New York"
john.firstname = "kevw"
"kevw"
john
{firstname: "kevw", lastname: "Andy", city: "New York", job: "Software"}city: "New York"firstname: "kevw"job: "Software"lastname: "Andy"__proto__: Object
john.timezone = 'PST'
"PST"
john
{firstname: "kevw", lastname: "Andy", city: "New York", job: "Software", timezone: "PST"}
delete john.job
true
john
{firstname: "kevw", lastname: "Andy", city: "New York", timezone: "PST"}


let country = [
    {
        name:'london',
        pop:845784397,
        climate:'modrate'
    },
    {
        name:'Knstford',
        pop:84579,
        climate:'cold'
    }
]
undefined
Object.keys(country)
(2) ["0", "1"]0: "0"1: "1"length: 2__proto__: Array(0)
let london = {name:'london',
        pop:845784397,
        climate:'modrate'
    }
undefined
Object.keys(london)
(3) ["name", "pop", "climate"]