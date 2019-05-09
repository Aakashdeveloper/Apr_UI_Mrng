/////String function//////
var a = "javascript"
undefined
>>>>>>a.toUpperCase()
"JAVASCRIPT"
var b = "PARIS"
undefined
>>>>>>b.toLowerCase()
"paris"
>>>>>>a.length
10
a[0]
"j"
a[1]
"a"
a[19]
undefined
a[9]
"t"

var myTxt = "Hi I am working on Javascript"
undefined
>>>>>> output = myTxt.replace("Javascript","HTML")
"Hi I am working on HTML"
myTxt
"Hi I am working on Javascript"
output
"Hi I am working on HTML"
myTxt1 = "   This is about ui.   "
"   This is about ui.   "
myTxt.length
29
myTxt1.length
23
>>>>>> output1 = myTxt1.trim()
"This is about ui."
output1
"This is about ui."
output1.length
17

var myTxt = "Hi I am working on Javascript"
undefined
>>>>>> myTxt.split(" ")
(6) ["Hi", "I", "am", "working", "on", "Javascript"]
myurl = "https://ngapi4.herokuapp.com/api/getProducts"
"https://ngapi4.herokuapp.com/api/getProducts"
myurl.split('/')
(5) ["https:", "", "ngapi4.herokuapp.com", "api", "getProducts"]

var a = "john"
undefined
a.charAt(0)
"j"
a.charAt(4)
""
a.charAt(5)
""
a.slice(1)
"ohn"
a.slice(2)
"hn"
myTxt
"Hi I am working on Javascript"
myTxt.slice(2,8)
" I am "
var a = "javascript"
undefined
a.charAt(0)
"j"
a.slice(1)
"avascript"
a.charAt(0).toUpperCase();
"J"
a.slice(1).toLowerCase()
"avascript"
>>>>>> a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
"Javascript"