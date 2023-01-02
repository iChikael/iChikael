function kiemtra() {
    var cannang = document.getElementById("cannang").value;
    var chieucao = document.getElementById("chieucao").value;
    var bmi = cannang / ( (chieucao*2) )
    var result = "";
    
    if (bmi < 16) 
        result = "gầy độ 3" ;
    else if (bmi < 17)
        result = "gầy độ 2"
    else if (bmi < 18.5)
        result = "gầy độ 1"
    else if (bmi < 25)
        result = "bình thường"
    else if (bmi < 30)
        result = "thừa cân"
    else if (bmi < 35)
        result = "béo phì độ 1" 
    else if (bmi < 40)
        result = "béo phì độ 2" 
    else
        result = "béo phì độ 3";

    document.getElementById("result").innerText = "Chỉ số BMI là: " + bmi + ". Bạn " + result ;
}