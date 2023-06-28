
 const promise = new Promise( function(resolve, rejected) {

    let num = Math.floor(Math.random() * (0 - 5)) + 5;

    if (num !== 0)
    {
        resolve(num);
    } else rejected("This is 0 - error"); 

})



promise 
    .then(function(answ) {
       console.log(1/answ);
    })
    .catch( function(error) {
        
        console.log(error);
       
    } )
    


