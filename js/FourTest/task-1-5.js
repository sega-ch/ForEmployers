const div = document.getElementById("root");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const a = document.createElement("a");

h1.textContent = "Header";
h1.setAttribute( "style" ,"border: 5px solid green;");


p.textContent = "Hello world";

a.setAttribute("href", "https://yandex.ru");
a.setAttribute("target", "_blank");
a.setAttribute("style", "color: white");
a.textContent = "open yandex";

div.append(h1);
div.append(p);
div.append(a);