for(var i =0; i<10; i++){
    console.log(i)
}

for(var a =0; a<=20; a++){
    console.log(a)
}

var city = ["London", "NewYork", "davos", "zurich", "Innsburg", "Amsterdam", "Helsinki"]
for(i=0; i<city.length;i++){
    if(city[i]==""){

    }
}

take one array with username 
than take input from the user 
if name is present in array than allow access 
if not than push that name in array

var names = ["Aakash", "john", "bill"]
var myname = "Aakash"
for(i=0;i<names.length;i++){
    if(names[i]===myname){
        console.log("verified")
    }else{
        names.push(myname)
    }
}

var mynum = [1,2,3,4,5,6,7,8,9,10,11]
for(i=0;i<mynum.length;i++){
    if(i%2==0){
        console.log('even= '+i)
    }else {
        console.log('odd= '+i)
    }
}


a=["apple"]
b=prompt("please give fruit name") 
if(b=="apple") 
{ console.log("allow access") } 
else{ a.push(b) }
console.log(a)