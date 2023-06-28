function getSum(arr) {

    let sum = 0;

    arr.forEach(element => {
        sum += element**2;
    });

    return alert(sum);

}
  
  // Примеры использования
  getSum([1, 3]) // => 10
  getSum([2, 5]) // => 29
  getSum([2, 3, 2]) // => 1