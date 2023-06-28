const promise = new Promise( function (resolve, rejected) {

    setTimeout( function () {
        resolve("Hi man");
    }, 3000)

})

promise
    .then( function(message) {

       console.log(message);

    })
    .catch(function(error) {
        
        console.log("Возникла ошибка", error);
    })