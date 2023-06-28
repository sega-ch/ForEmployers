function delElem(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
        {
            arr.splice(i-1, 1);
        }
    }

    return (console.log(arr));
  }
  // Примеры использования
  delElem("да", ["да", "нет", "да", "нет"]) // => ["нет", "нет"]
  delElem(0, [1, 3, 0, 1, 0, 5]) // => [1, 3, 1, 5]