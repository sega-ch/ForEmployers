let char ="";
let num = 0;

class MyString {

    constructor({str}) 
    {
        this.str = str;
    }

    reverse() 
    {
        console.log(this.str.split("").reverse().join(""));
    }

    ucFirst() 
    {
        const count = this.str.length;
        let firstChar = this.str[0].toUpperCase();
        const afterFirst = this.str.substr(1, count);
        console.log(firstChar + afterFirst);
       
    }

    ucWords() 
    {

      console.log(this.str.replace(/(^|\s)\S/g, function(char) {return char.toUpperCase()}));
      
    }

}
const string = new MyString({str: "today is a good day"});

string.reverse();
string.ucFirst();
string.ucWords();


