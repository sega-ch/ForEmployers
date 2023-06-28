async function GetProducts() {
    try {
        
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const data = await response.json();

        console.log(data);

        const imgPack = [];
        const productName = [];
        const productCost = [];

        for (let i = 0; i < 10; i++)
        {
            productName.push(data[i].title);
            productCost.push(data[i].price);
            imgPack.push(data[i].image);
        }
        MakePage(imgPack, productName, productCost);


    } catch (error) {
        console.log("We find ", error);
    }
}

GetProducts();

function MakePage(imgPack, productName, productCost) {

    const cards = document.querySelector(".cards");

    try {
        
            for ( let i = 0; i < 10; i++)
        {
            const card = document.createElement('div');
            card.setAttribute("class", "card"+i);
            card.setAttribute("style", "border: 3px solid black; padding:5px; margin: 20px; width: 300px; height: auto");
            cards.append(card);

            const picture = document.createElement("img");
            picture.src = imgPack[i];
            picture.setAttribute("style", "width: 100px; height:150px");
            const name = document.createElement("h1");
            name.textContent = productName[i];
            const price = document.createElement("p");
            price.textContent = "Price "+productCost[i];
            const button = document.createElement("button");
            button.textContent = "Оформить заказ";



            card.append(picture);
            card.append(name);
            card.append(price);
            card.append(button);
        }

    } catch (error) {
        console.log("CreateError "+error);
    }

    // const card = document.createElement('div');
    // card.setAttribute("style", "border: 3px solid black; padding:5px; margin: 20px");
    // cards.append(card);




    // const picture = document.createElement("img");
    // picture.src = imgPack[0];
    // picture.setAttribute("style", "width:200px; height:300px");
    // const name = document.createElement("h1");
    // name.textContent = productName[0];
    // const price = document.createElement("p");
    // price.textContent = "Price "+productCost[0];
    // const button = document.createElement("button");
    // button.textContent = "Оформить заказ";



    // card.append(picture);
    // card.append(name);
    // card.append(price);
    // card.append(button);

    
}

