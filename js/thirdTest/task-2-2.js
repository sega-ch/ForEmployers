function takeTime()
{
    let userTime = prompt("Введите  время таймера в формате ЧЧ:ММ:СС");
    
    let hours = userTime[0] + userTime[1];
    let minutes = userTime[3] + userTime[4];
    let seconds = userTime[6] + userTime[7];

    timer(+hours, +minutes, +seconds);
}

function timer(hours, minutes, seconds)
{
    const miliseconds = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);

    setTimeout(message, miliseconds);

}

function message()
{
    alert("Время вышло");
    takeTime();
}

takeTime();