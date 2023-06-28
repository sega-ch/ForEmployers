fetch('https://fakestoreapi.com/products?limit=10', {
})
         .then(function(response){
            return response.json();
         })
         .then(function(product) {
            console.log(product);
         })
         .catch(function(error){
            console.log("This err ", error);
         })
