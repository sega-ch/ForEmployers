function compareArrays(arr1, arr2) {
    let countF = 0;
    let countT = 0;

   
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (!(arr1[i][j] === arr2[i][j])) {
              countF ++;
            
            } else countT += countF;
        }
      }     

      checkTrue(countT);
}

function checkTrue(counter)
{
  if (counter > 0) {
    return(alert("False"));
  } else return(alert("True"));
}


  
  // Примеры использования
  compareArrays([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]); // => true
  compareArrays([[1, 2], [4]], [[1], [4, 5]]); // => false


 