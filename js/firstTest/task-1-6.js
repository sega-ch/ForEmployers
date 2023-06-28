let a = prompt("Type a number");
let b = prompt("Type a number");
let c = prompt("Type a number");
let D = 0;

a = +a;
b = +b;
c = +c;

D = (b**2)-(4*a*c);

if (D<0)
{
    console.log("Корней нет");
}
else if (D===0)
{
    console.log(b/(2*a));
}
else if (D>0)
{
    let firstRoot = (-b+Math.sqrt(D))/(2*a);
    let secondRoot = (-b-Math.sqrt(D))/(2*a);
}