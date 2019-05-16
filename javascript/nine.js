Math.random()
0.9926523932032811
Math.random()
0.8659988096029814
Math.random()
0.7525358999001699
Math.random()*100
0.9261036117710564
Math.random()*100000000000
61244901820.4571
Math.random()*1000000
409611.0109929769
Math.floor(100.343)
100
Math.floor(100.943)
100
Math.ceil(100.943)
101
Math.round(100.943)
101
Math.round(100.443)
100
Math.round(100.543)
101
Math.floor(Math.random()*1000000)
250791
Math.floor(Math.random()*1000000)
378963
Math.floor(Math.random()*1000000)
741773
Math.floor(Math.random()*1000000)
885905
Math.floor(Math.random()*1000000)
818514
Math.max(2,3,5,6,88,65,3)
88
Math.min(2,3,5,6,88,65,3)
2
Math.pow(2,2)
4
Math.sqrt(4)
2
Math.PI
3.141592653589793
Math.sin(0)
0
Math.sin(1)
0.8414709848078965
Math.cos(0)
1
Math.cos(1)
0.5403023058681398
Math.log(10)
2.302585092994046


/*
input from the user of 4 digit and on side you will 
generate random number for digits
and do floor of both number
if both number match console user "win"
else "user loose"
*/


var a = "10"
undefined
10 === "10"
false
10+a
"1010"
parseInt(a)
10
10+parseInt(a)
20
var a = "10.56"
undefined
10+parseInt(a)
20
10+parseFloat(a)
20.560000000000002
10+parseFloat(a,2)
20.560000000000002
10+parseFloat(a)
20.560000000000002
Math.trunc(10.11)
10
var a = 10.45454
undefined
a.toFixed(2)
"10.45"
(10+parseFloat(a)).toFixed(2)
"20.45"

/*
Three words from the user 
push them into array and generate random word 
from there
*/



var names = ["anu", "abc", "xyz", "pqr"];
         var myval = "anu1"
         if(names.indexOf(myval) !== -1){
             console.log("verified")
         }else{
            names.push(myval);
         }
console.log(names)


Math.floor(Math.random() * (2 - 0 + 1)) + 0;