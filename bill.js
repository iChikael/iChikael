var bill = [
    {
        productName: 'Cam',
        quantity: 4,
        price: 30,
        discount: 5,
    },
    {
        productName: 'Chanh',
        quantity: 2,
        price: 5,
        discount: 2,
    },
    {
        productName: 'Xả',
        quantity: 1,
        price: 4,
        discount: 5,
    }
]

let clone = Object.assign({}, bill[0]);
bill.push(clone);
Object.assign(clone, { productName: 'Orange' });
Object.assign(clone, { quantity: 10});

for (var i = 0; i < bill.length; i++) {
    console.log(`Tên sản phẩm: ${bill[i].productName}. Số lượng sản phẩm: ${bill[i].quantity}. Đơn giá: ${bill[i].price}. Giảm giá: ${bill[i].discount}%. Tổng giá: ${bill[i].quantity * bill[i].price - (bill[i].quantity * bill[i].price * bill[i].discount) / 100}`)
}
// for ( let key in bill[0]) {
//     console.log(key)
// }


console.log(clone);

