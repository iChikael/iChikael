var numbers =taoarray()
function taoarray(size,min,max) {
    
    var numbers = [];
      for (var i = 0; i < size; i++) {
        
        numbers.push(Math.floor(Math.random() * (max-min+1 ) + min));
      }
      return numbers;
    }

// function hienthi(numbers) {
//     for(let i = 0; i < numbers.length; i++){
//         document.write(`${numbers[i]} <br>`);
//     }
// }

function demsonguyento(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (locsonguyento(numbers[i])) {
        count++;
      }
    }
    return count;
  }
  
  function locsonguyento(numbers) {
    if (numbers < 2) {
      return false;
    }
    for (let i = 2; i < numbers; i++) {
      if (numbers % i === 0) {
        return false;
      }
    }
    return true;
  }


function kiemtra(numbers) {
    // return numbers.includes(+document.getElementById('find').value);
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === +document.getElementById('find').value) {
          return true;
        }
      }
      return false;
    }
  
    

function pro(){
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    numbers = taoarray(size, min, max);
    document.getElementById('showArray').innerText = `Array: ${numbers}`;
    document.getElementById('soNguyento').innerText = `So luong so nguyen to: ${demsonguyento(numbers)}`;
}

function findvalue(){
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    let addfind = +document.getElementById('find').value;
    // document.getElementById('showFind').innerText = ` ${kiemtra(numbers)} `;
    
    if (kiemtra(numbers) === true){
        document.getElementById('showFind').innerText = 'findValue is exist'
    }
    else {
        document.getElementById('showFind').innerText = 'findValue is not exist'
    }


}