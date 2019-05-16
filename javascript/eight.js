function add(a,b){
    return a+b
}

add(1,2)
const add = (a,b) => { return a+b }
add(2,3)

///////////

var marks = [34,49,67,89,56,78]
marks.filter((mymarks) => { return mymarks >= 50 })

/*function validateMarks(mymarks){
    return mymarks>= 50
}

const validateMarks = (mymarks) => { return mymarks >= 50 }
*/

var mynum = [0,1,2,3,4]
mynum.filter((data) => { 
    out = data*1
    return out
})

var mynum = [0,1,2,3,4]
mynum.map((data) => { 
    out = data*1
    return out
})