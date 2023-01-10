class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
var bill = [
    new Item("Sony Xperia", 5000000, 100),
    new Item("Samsung Galaxy", 7000000, 200),
    new Item("Nokia 6", 4500000, 50),
    new Item("Apple iPhone 6s", 5000000, 15),
    new Item("Xiaomi Mi 5s Plus", 2500000, 10),
    new Item("Apple iPhone 8 Plus", 12000000, 20),
    new Item("HTC One", 12500000, 50)
]

function renderBill() {
    var tbBill = document.getElementById("tbBill");
    tbBill.innerHTML = "";
    for (var i = 0; i < bill.length; i++) {
        tbBill.innerHTML += `
        <tr>
            <td>${bill[i].name}</td>
            <td style='text-align:right;'>${bill[i].price}</td>
            <td style='text-align:right;'>${bill[i].quantity}</td>
            <td><button type="button" onclick="delProduct(${i})">Del</button></td>
        </tr>`
    }
}

function addProduct() {
    var productName = document.getElementById("productNameInput").value;
    var productPri = document.getElementById("productPri").value;
    var producInv = document.getElementById("productInv").value;

    bill.push(new Item(productName, productPri, producInv));
    tbBill = document.getElementById("tbBill");
    tbBill.innerHTML = ""
    for (var i = 0; i < bill.length; i++) {
        tbBill.innerHTML += `
        <tr>
            <td>${bill[i].name}</td>
            <td style='text-align:right;'>${bill[i].price}</td>
            <td style='text-align:right;'>${bill[i].quantity}</td>
            <td><button type="button" onclick="delProduct(${i})">Del</button></td>
        </tr>`
    }
    document.getElementById("productNameInput").value = "";
    document.getElementById("productPri").value ="";
    document.getElementById("productInv").value ="";

}
function delProduct(index) {
    bill.splice(index, 1);
    renderBill();
}
renderBill()