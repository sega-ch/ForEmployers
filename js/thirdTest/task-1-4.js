function reverseStr(str) {
    // return(console.log(str.split("").reverse().join(""))); 
    // // split разбивает по буквам и записывает в массив
    // // reverse переварачивает массив
    // // join собирает всё в слово


    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return(console.log(newString));
    
  }
  
  // Примеры использования
  reverseStr("привет") // => "тевирп"
  reverseStr("мир") // => "рим"
  reverseStr("моё имя ваня") // => "янав ями ёом"