function getDivisors(num) {
    const arr = [];

    for (i = 0; i <= num; i++)
    {
        if (num%i===0)
        {
            arr.push(i);
        }
    }

    return(console.log(arr));

  }
  
  // Примеры использования
  getDivisors(4) // => [1, 2, 4]
  getDivisors(9) // => [1, 3, 9]
  getDivisors(11) // => [1, 11]