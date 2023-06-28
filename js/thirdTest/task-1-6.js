function fillArray(num) {
    const arr = [];
    
    for (let i = num; i > 0; i--) {
        arr.push(i);
    }

    return(console.log(arr.reverse()));
  }
  
  // Примеры использования
  fillArray(4) // => [1, 2, 3, 4]
  fillArray(2) // => [1, 2]
  fillArray(7) // => [1, 2, 3, 4, 5, 6, 7]