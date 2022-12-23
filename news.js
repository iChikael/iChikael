function erasetest() {
    
    document.getElementById("test1").innerText="";
}



function clearInput(){
    
    document.getElementById("inp_1").value = "";
}
``




var Mous1 = document.getElementById("Mous1");
demo.addEventListener("mouseover",mouseover);
demo.addEventListener("mouseout",mouseout);
function mouseover() {
    document.getElementById("Mous1").style.color="red";
}
function mouseout() {
    document.getElementById("Mous1").style.color="black";
}