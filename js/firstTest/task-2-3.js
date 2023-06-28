const rand = Math.floor(Math.random()*5);
console.log(rand);

alert("Смотри, тебе нужно напоить птичку. Для этого в следующем окне угадай угол наклона, под которым упадёт крышка ведра, чтобы у птички был доступ к воде. У тебя 2 попытки");
let userAnswer1 = prompt("Угол наклона от 1 до 5. Действуй, птичка хочет пить!")
userAnswer1 = +userAnswer1;

if (userAnswer1===rand)
{
    alert("В точку, теперь птичка напилась!");
}
else if (userAnswer1!=rand)
{
    if (userAnswer1>rand)
    {
        alert("Наклон поменьше!")
        let userAnswer2 = prompt("Скорее пиши угол");
        userAnswer2=+userAnswer2;
        if (userAnswer2===rand)
        {
            alert("Ура. Угадал!");
        }
        else
        {
            alert("К сожалению нет( Правильный угол ="+rand);
        }
    }
    else if (userAnswer1<rand)
    {
        alert("Наклон побольше!")
        let userAnswer2 = prompt("Скорее пиши угол");
        userAnswer2=+userAnswer2;
        if (userAnswer2===rand)
        {
            alert("Ура. Угадал!");
        }
        else
        {
            alert("К сожалению нет( Правильный угол ="+rand);
        }
    }
}
