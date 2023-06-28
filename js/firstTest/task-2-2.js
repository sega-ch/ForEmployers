const randomNumber1 = Math.floor(Math.random() * 10);


let counter = 3;
let userAnswer1 = prompt("Угадайте число от 1 до 10 (кажыдй раз чило новое). У вас 3 попытки.");
userAnswer1 = +userAnswer1;

if (userAnswer1===randomNumber1)
{
    alert("Ты победил!");
}
else if (userAnswer1!=randomNumber1)
{
    counter--;
    alert("Попробуй ещё раз!");
    const randomNumber2 = Math.floor(Math.random() * 10);
    let userAnswer2 = prompt("Угадайте число от 1 до 10 (кажыдй раз чило новое). У вас "+counter+" попытки.");
    userAnswer2 = +userAnswer2;

    if (userAnswer2===randomNumber2)
    {
        alert("wineeeer!");
    }
    else if (userAnswer2!=randomNumber)
    {
        counter--;
        alert("Попробуй ещё раз");
        const randomNumber3 = Math.floor(Math.random() * 10);
        let userAnswer3 = prompt("Угадайте число от 1 до 10 (кажыдй раз чило новое). У вас "+counter+" попытки.");
        userAnswer3 = +userAnswer3;
        if (userAnswer3===randomNumber3)
        {
            alert("Наконец то! Угадал)");
        }
        else if (userAnswer3!=randomNumber3)
        {
            counter--;
            alert("Количество попыток "+counter+". Не в этот раз(");
        }

    }

}

