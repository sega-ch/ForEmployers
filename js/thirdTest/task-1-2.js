function getDigitsSum(num) {
     
     let sum = 0;
     let array = (""+num).split("").map(Number);

     array.forEach(element => {
          sum += element;
          
     });
     
     
     return(console.log(sum));
     

 }
 
 // Примеры использования
 getDigitsSum(251) // => 8
 getDigitsSum(100) // => 1
 getDigitsSum(16) // => 7