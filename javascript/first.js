Es5 / Es6 (Ecma Script)
/////////////
string
number
boolean
---------------
var

----------------
var name="aakash"
undefined
name
"aakash"
var city = "london"
undefined
var color = 'red'
undefined
color
"red"
var fruits = "apple'
VM332:1 Uncaught SyntaxError: Invalid or unexpected token
var fruits = 'apple'
undefined
fruits
"apple"
------------
var a = "1"      =======> typeof(a)
                          "string"
var b = "aakash" =======> typeof(b)
                          "string"

var c = "true"  =======> typeof(b)
                         "string"     
var d = 1       ======= typeof(d)
                        "number"
var e = 987896896.766
var f = true    =======> typeof(f)
                            "boolean"                   
var g = false
typeof(e)
"number"
typeof(g)
"boolean"

-----------
var a = 1
undefined
var b = 2
undefined
a+b
3
a-b
-1
b-a
1
a*b
2
a/b
0.5
-------------
var a = "Hi"
undefined
var b = "Javascript"
undefined
a+b
"HiJavascript"
var c = 1
undefined
var d = 2
undefined
c+d
3
a-b
NaN
c-d
-1
a*b
NaN
a/b
NaN
---
var a = "hi"
undefined
var b = 1
undefined
a+b
"hi1"
b+a
"1hi"
var c = 1
undefined
b+c
2
a-b
NaN
----
string + string = concat    => string
string + number = concat    => string
number + number = add       => number
number + string = string    => string   
number + number +  string => string
string +number + number => string

---------
var a = "hi "
undefined
var b = " bye"
undefined
var c =1
undefined
var d = 1
undefined
a+b+c
"hi  bye1"
b+c+d
" bye11"
c+d+a
"2hi "
------------------
10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"
------------
1+true
2
1+false
1
true+true
2
false+false
0
true+false
1
true+"hi"
"truehi"
"hi "+true
"hi true"
true+true+" hi"
"2 hi"