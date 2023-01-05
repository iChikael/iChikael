var numbers = taoarray(10);

// numbers(size,min,max);

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
  hienthi();


  function tong() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(`Tong la : ${tong()}`);

  function kiemtra15() {
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === 15) {
        return true;
      }
    }
    return false;
  }
  console.log(`Co 15: ${kiemtra15()}`);

  function demsole() {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        count++;
      }
    }
    return count;
  }
  console.log(`So luong so le: ${demsole()}`);