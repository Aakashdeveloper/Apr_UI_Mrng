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