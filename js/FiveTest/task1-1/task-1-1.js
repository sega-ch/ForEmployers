let menu = document.querySelector(".menu");
let list = document.querySelector(".list");
let item = document.querySelector(".item");

menu.addEventListener("mouseover", function (e) {

    list.style.visibility = "visible";
    
})

list.addEventListener("mouseover", function (e) {

    list.style.visibility = "visible";
    
})

item.addEventListener("mouseover", function (e) {

    list.style.visibility = "visible";
    
})

list.addEventListener("mouseout", function (e) {

    list.style.visibility = "hidden";
    
})
