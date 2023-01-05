var numbers = taoarray();
function taoarray(size) {
  var size = 10;
  var numbers = [];
    for (var i = 0; i < 10; i++) {
      // numbers.push(Math.floor(Math.random() * (max-min+1 ) + min);
      numbers.push(Math.floor(Math.random() * 41) + 10);
      // taoarray[i] = Math.floor(Math.random() * 41) + 10;
    }
    return numbers;
  }


  function hienthi() {
    numbers.forEach(number => console.log(number));
    
    // for (var i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i]);
    //     //document.write(`${number[i]}</br>`);
    //   }
  }
  hienthi(numbers);

  function kiemtra15(numbers) {
    return numbers.includes(15);
  }
  
  if (kiemtra15(numbers) == true){
    console.log( 'findValue is exist')
}
  else {
    console.log('findValue is not exist')
}