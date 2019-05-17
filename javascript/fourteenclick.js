const calc =  (opt) => {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    let out;
    if(opt == "add"){
        out = parseInt(a)+parseInt(b)
    } else if(opt== "sub")
        out = a-b
    else {
        out = "i am not trained"
    }
    alert(out)
}