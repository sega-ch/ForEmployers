const body = document.querySelector("body");
const div = document.createElement("div");
div.setAttribute("style", "width: 500px; height: 500px; background-color: purple");

body.append(div);

div.addEventListener("mouseover", function(event) {

    div.setAttribute("style", "width: 500px; height: 500px; background-color: purple; border: 5px solid red");
    div.textContent = "Sup man";

})

div.addEventListener("mouseout", function(event) {

    div.setAttribute("style", "width: 500px; height: 500px; background-color: purple");
    div.textContent = " ";

})