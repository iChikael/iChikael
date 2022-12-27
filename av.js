let aveScore = 7.8;

(aveScore >= 9 && aveScore <= 10) ? console.log("Xuất sắc") :
     (aveScore >= 8 && aveScore < 9) ? console.log("Giỏi"):
         (aveScore >= 7 && aveScore < 8) ? console.log("Khá"):
             (aveScore >= 5 && aveScore < 7) ? console.log("Trung bình"): 
                 (aveScore >= 0 && aveScore < 5) ? console.log("Yếu"): 
                     console.log("Invalid average score");
