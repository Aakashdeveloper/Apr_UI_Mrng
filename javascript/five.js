var a = [1,2,3,4]
var b = ["a","b","c"]
var c = [true, false, true,true]
   
var myarray= [1,2,"f","dg",4,5,true, false,32,4,"dgf",4]

var a = [1,2,3,4,5,6,7]
undefined
var fruits = ['apple', 'mango','banana']
undefined
typeof(fruits)
"object"
fruits[0]
"apple"
fruits[2]
"banana"
fruits.length
3
fruits.push('papaya')
4
fruits
(4) ["apple", "mango", "banana", "papaya"]
fruits.push('orange')
5
fruits
(5) ["apple", "mango", "banana", "papaya", "orange"]
fruits.pop()
"orange"
fruits
(4) ["apple", "mango", "banana", "papaya"]
fruits.pop(1)
"papaya"
fruits.shift()
"apple"
fruits
(2) ["mango", "banana"]
fruits.unshift('kiwi')
3
fruits
(3) ["kiwi", "mango", "banana"]

push === unshift
pop === shift

var city = ["London","NewYork","Delhi"]
undefined
city.slice(1)
(2) ["NewYork", "Delhi"]
var city = ["London","NewYork","Delhi"]
undefined
var city = ["London","NewYork","Delhi","Amsterdam","Helsinki"]
undefined
city.slice(2,4)
(2) ["Delhi", "Amsterdam"]
var city = ["London","NewYork","Delhi","Amsterdam","Helsinki"]
undefined
city.splice(2,0,"davos","zurich")
[]
city
(7) ["London", "NewYork", "davos", "zurich", "Delhi", "Amsterdam", "Helsinki"]
city.splice(4,1,"Venice","Mumbai")
["Delhi"]
city
(8) ["London", "NewYork", "davos", "zurich", "Venice", "Mumbai", "Amsterdam", "Helsinki"]
city.splice(4,2,"Innsburg")
(2) ["Venice", "Mumbai"]
city
(7) ["London", "NewYork", "davos", "zurich", "Innsburg", "Amsterdam", "Helsinki"]
var city = ["London", "NewYork", "davos", "zurich", "Innsburg", "Amsterdam", "Helsinki"]
undefined
city.sort()
(7) ["Amsterdam", "Helsinki", "Innsburg", "London", "NewYork", "davos", "zurich"]
city.indexOf("london")
-1
city.indexOf("London")
3
city.indexOf("davos")
5
city.indexOf("venice")
-1
city.indexOf("paris")
-1