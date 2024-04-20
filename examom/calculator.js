function add(){
    //window.alert("hi")
    let a = document.getElementById("num1").value;
    let b= document.getElementById("num2").value;
    //console.log(parseInt(a)+ parseInt(b));
    document.getElementById("res1").innerHTML=parseInt(a)+parseInt(b);
}


function sub(){
    //window.alert("hi")
    let a = document.getElementById("num1").value;
    let b= document.getElementById("num2").value;
    console.log(parseInt(a)- parseInt(b));
    document.getElementById("res1").innerHTML=parseInt(a)-parseInt(b);
}

function mul(){
    //window.alert("hi")
    let a = document.getElementById("num1").value;
    let b= document.getElementById("num2").value;
    console.log(parseInt(a)* parseInt(b));
    document.getElementById("res1").innerHTML=parseInt(a)*parseInt(b);
}

function div(){
    //window.alert("hi")
    let a = document.getElementById("num1").value;
    let b= document.getElementById("num2").value;
    console.log(parseInt(a)/parseInt(b));
    document.getElementById("res1").innerHTML=parseInt(a)/parseInt(b);
}