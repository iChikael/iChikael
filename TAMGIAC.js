let a = 3;
let b = 4;
let c = 5;

//(a == b && b == c && a == c) ? console.log("Đây là tam giác đều") : 
//(a == b || a == c || b == c) ? console.log("Đầy là tam giác cân") :
//(a**2 + b ** 2 == c**2) || (a**2 + c**2 == b**2) || (b**2 + c**2 == a**2) ? console.log("Đây là tam giác vuông") :
//console.log("Đây là tam giác thường");

switch (true) {
    case (a == b && b == c && a == c) : {
        console.log("Đây là tam giác đều");
        break
    }
    case (a == b || a == c || b == c) : {
        console.log("Đầy là tam giác cân") ;
        break
    }
    case (a**2 + b ** 2 == c**2) || (a**2 + c**2 == b**2) || (b**2 + c**2 == a**2) : {
        console.log("Đây là tam giác vuông") ;
        break
    }
    default : {
        console.log("Đây là tam giác thường");
    }
}

//if(a + b > c && a + c > b && b + c > a){
 //   if(a == b && b == c && a == c){
  //      console.log("Đây là tam giác đều");
   // }
   // else if (a == b || a == c || b == c){
    //    console.log("Đầy là tam giác cân");
    //}
    //else if((a**2 + b ** 2 == c**2) || (a**2 + c**2 == b**2) || (b**2 + c**2 == a**2)){
     //   console.log("Đây là tam giác vuông");
   // }else{
    //    console.log("Đây là tam giác thường");
   // }
//}
//else{
 //   console.log("Not a triangle");
//}