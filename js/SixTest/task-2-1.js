class Validator {

    constructor({num, arr, phone}) {

        this.num = num;
        this.arr = arr;
        this.phone = phone;
    }

    isRangedNumber () {

        let newArr = [];
        let count;
        for (let i = this.arr[0]; i<= this.arr[1]; i++) {

            newArr.push(i);

        }

       

        for (let i = 0; i<newArr.length; i++) {

            if (newArr[i] === this.num) {
                count = 1;
            } 

        }

        if (count === 1) {
            console.log("true");
        } else {
            console.log("false");
        }
        

    }

    isPhoneNumber () 
    {
        let phoneNumber = this.phone;
        const phoneLenth = phoneNumber.length;

        let regex = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        let res = regex.exec(phoneNumber); 

        if (phoneLenth === 16)
        {
            if (res)
            {
              console.log("true");
            } else console.log("false");
        }

    }

}

const valid = new Validator({num: 2, arr: [1,5], phone: "+7 999 999 99 99"});
valid.isRangedNumber();
valid.isPhoneNumber();