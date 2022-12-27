function tienphong(){
    var AA=+document.getElementById("phong").value;
    var BB=+document.getElementById("ngay").value;
    var result
if(AA==1){
    result = 1000*+BB;
}


if(AA==2){
    result=800*BB;
}
if(AA==3){
    result=500*BB;
}
    

document.getElementById("Result").innerHTML = result;

}
