class Item {
    constructor(name, price, quantity, discount, surcharge) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.surcharge = surcharge;
    }
    getAmount() {
        return (1 - this.discount) * (this.price * this.quantity) + this.surcharge;
    }
    getDiscount() {
        return `${this.discount * 100}%`;
    }
}
var bill = [

    new Item("101", 500000, 3, 0.05, 400000),
    new Item("102", 400000, 2, 0, 200000),
    new Item("103", 400000, 3, 0.05, 150000)
]

// for (var i =0; i < bill.length; i++){
//     console.log(`Số phòng ${bill[i].name} Đơn giá : ${bill[i].price} Số ngày ở : ${bill[i].quantity} Giảm giá : ${bill[i].discount} Phụ thu : ${bill[i].surcharge} Total : ${bill[i].getAmount()}`);
// }
function renderBill() {
    var tbill = document.getElementById("tbBill");
    var totalAmount = 0;
    for (var i = 0; i < bill.length; i++) {
        tbill.innerText += `
        <tr>
           <td>${i + 1}</td>
           <td>${bill[i].name}</td>
           <td>${bill[i].quantity}</td>
           <td>${bill[i].price}</td>
           <td>${bill[i].getDiscount()}</td>
           <td>${bill[i].surcharge}</td>
           <td>${bill[i].getAmount()}</td>
        </tr>   
 `
    }
}
renderBill()