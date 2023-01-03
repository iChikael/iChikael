var runningTotal=0;
var buffer = "0";
var previousOperator;


const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText=buffer
}