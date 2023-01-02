// public class Main {
//     public static void main(String[] args) {
//       // Tạo một đối tượng StringBuilder để lưu trữ bảng cửu chương
//       StringBuilder table = new StringBuilder();
  
//       // Vòng lặp để chèn các dòng
//       for (int i = 1; i <= 9; i++) {
//         // Vòng lặp để chèn các ô
//         for (int j = 1; j <= 9; j++) {
//           // Tính toán giá trị của ô hiện tại và thêm nó vào bảng
//           int value = i * j;
//           table.append(value).append("\t");
//         }
//         // Thêm xuống dòng sau mỗi dòng trong bảng
//         table.append("\n");
//       }
  
//       // In ra bảng cửu chương
//       System.out.println(table);
//     }
//   }



const table = document.createElement('table');

for (let i = 1; i <= 9; i++) {
  const row = document.createElement('tr');
  for (let j = 1; j <= 9; j++) {
    const cell = document.createElement('td');
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);
 