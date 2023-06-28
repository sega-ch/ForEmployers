function test() {

    return new Promise( function(resolve, rejected) {
        resolve(Math.floor(Math.random() * (1 - 10)) + 11);
    })

}



let arr = [];

for (let i = 0; i < 10; i++)
{
    const request = test();

    request
        .then( function(answ) 
        {
            arr.push(answ);
        })
}

console.log(arr);
