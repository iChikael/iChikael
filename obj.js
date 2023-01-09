var students = [
    {
        name: "Nguyen Van A",
        gender: "Nam",
        birth: "04/11/1990",
        grades: 
            {
                math: "9",
                physics: "8",
                chemistry: "7"
            }
        
    },
    {
        name: "Nguyen Van C",
        gender: "Nam",
        birth: "04/01/1990",
        grades: 
            {
                math: 9,
                physics: 8,
                chemistry: 6
            }
        
    },
    {
        name: "Nguyen Van C",
        gender: "Nam",
        birth: "04/10/1990",
        grades: 
            {
                math: 4,
                physics: 8,
                chemistry: 7
            }
        
    }
]

for ( var i = 0 ; i < students.length ; i++){
    console.log(`${students[i].name} Toan: ${students[i].grades.math} Ly: ${students[i].grades.physics} Hoa: ${students[i].grades.chemistry}`)
}

//tao 1 doi tuong bill(hoa don); co ten sp ,so luong, co don gia, co giam gia
//tao total hien thi console log dua tren 
// Sử dụng obj tạo 3 đối tướng bill bao gồm tên sản phẩm, số lượng sản phẩm, đơn giá, giảm giá
// hiển thị console log bao gồm tên sản phẩm, số lượng sản phẩm, đơn giá, giảm giá và tổng giá dựa trên các điều kiện trên