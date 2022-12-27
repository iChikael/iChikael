//function kiemtra()
//{

    //var a = document.getElementById("aa").value;
    //var b = document.getElementById("ba").value;
    //var c = document.getElementById("ca").value;
var a =3
var b=3
var c=3


if (a + b > c && a + c > b && b + c > a){
     if(a == b && b == c && a == c){
        console.log('Đây là tam giác đều');
        //document.getElementById("result").innerHTML= "Đây là tam giác đều";
    }
     else if (a == b || a == c || b == c){
        console.log('Đây là tam giác cân');
        //document.getElementById("result").innerHTML="Đây là tam giác cân";
    }
     else if((a**2 + b ** 2 == c**2) || (a**2 + c**2 == b**2) || (b**2 + c**2 == a**2)){
        console.log('Đây là tam giác vuông');
        //document.getElementById("result").innerHTML="Đây là tam giác vuông";
    }
     else{
        console.log('Đây là tam giác thường');
        //document.getElementById("result").innerHTML="Đây là tam giác thường";
    }
}
else{
    console.log('Not a triangle');
    //document.getElementById("result").innerText= "Not a triangle" ;
}

//}
