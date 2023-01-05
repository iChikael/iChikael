// Tạo ra mảng numbers có 10 phần tử và giá trị trong khoảng [10, 50]

// var numbers = taoarray();
// function taoarray() {
//     var numbers = [];
//     for (var i = 0; i < 10; i++) {
//       numbers.push(Math.floor(Math.random() * 41) + 10);
//     }
//     return numbers;
//   }


  var numbers = taoArray(20);
  function taoArray(size) {
      var numbers = [];
      for (var i = 0; i < size; i++) {
        numbers.push(Math.floor(Math.random() * 41) + 10);
      }
      return numbers;
    }


  // let numbers = [];
  // for (let i = 0; i < size; i++) {
  //     numbers[i] = Math.floor(Math.random() * 41 + 10);
  // }
  // return numbers;
  // }


// var numbers = newArray();
// function newArray() {
//   var numbers = [];
//   for (var i = 0; i < 10; i++) {
//       numbers[i] = Math.floor(Math.random() * 41 + 10);
//   }
//   return numbers;
// }


 // // 1. Hiển thị mảng numbers ra màn hình (mỗi giá trị trên mỗi hàng)
  
  function hienthi(numbers) {
    numbers.forEach(number => console.log(number));
  }
  hienthi(numbers);



  // for (const number of numbers) {
  //   console.log(number);
  // }
  
  
//   for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);

// }

  
  // // 2.Tính tổng các giá trị có trong mảng numbers
  
  // function Tong(numbers) {
  //   return numbers.reduce((sum, number) => sum + number, 0);
  // }
  // console.log(`Tong la: ${Tong(numbers)}`);

  
  // function tong(numbers) {
  //   var sum = 0;
  //   for (var i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }
  //   return sum;
  // }
  // console.log(`Tong la :  ${tong(numbers)}`);

  
  // function tong(){
  // var sum =0
  // numbers.forEach(function (element) {
  //   sum += element;
  // });
  // return sum;
  // }
  
  // console.log(`Tong la: ${tong()}`);


  // // 3.Kiểm tra trong mảng numbers có xuất hiện số 15 ko (trả về true nếu có và false nếu không)
  
  
  // function kiemtra15(numbers) {
  //   return numbers.includes(15);
  // }
  // console.log(`Co 15: ${kiemtra15(numbers)}`);

  // function kiemtr15(){
  //   return numbers.some(num => num === 15);
  //   }
  // console.log(`Co 15: ${kiemtr15()}`);


  // function kiemtra15() {
  //   for (var i = 0; i < numbers.length; i++) {
  //     if (numbers[i] === 15) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // console.log(`Co 15: ${kiemtra15()}`);


  // 4.Đếm xem trong mảng numbers có bao nhiêu số lẻ?
  
  
  // function demsole(numbers) {
  //   return numbers.filter(number => number % 2 === 1).length;
  // }
  // console.log(`So luong so le: ${demsole(numbers)}`);


  // function demsole(numbers) {
  //   // Khởi tạo biến count bằng 0
  //   var count = 0;
  
  //   // Lặp qua từng phần tử trong mảng numbers
  //   for (var i = 0; i < numbers.length; i++) {
  //     // Nếu phần tử là số lẻ, tăng count lên 1
  //     if (numbers[i] % 2 !== 0) {
  //       count++;
  //     }
  //   }
  
  //   // Trả về số lượng số lẻ trong mảng numbers
  //   return count;
  // }
  // console.log(`So luong so le: ${demsole(numbers)}`);




