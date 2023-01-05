var numbers = taoarray();
function taoarray() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 41) + 10);
    }
    return numbers;
  }

  function hienthi(numbers) {
    numbers.forEach(number => console.log(number));
  }
  hienthi(numbers);


  function Tong(numbers) {
    return numbers.reduce((sum, number) => sum + number);
  }
  console.log(`Tong la: ${Tong(numbers)}`);

  function demsole(numbers) {
    return numbers.filter(number => number % 2 === 1).length;
  }
  console.log(`So luong so le: ${demsole(numbers)}`);

  function kiemtra15(numbers) {
    return numbers.includes(15);
  }
  console.log(`Co 15: ${kiemtra15(numbers)}`);