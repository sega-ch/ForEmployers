let percent = +prompt("Введите процентную ставку"); 
// percent = percent/100;
const firstTake = +prompt("Введите сумму первоночального взноса");
const creditSum = +prompt("Введите сумму кредита");
const endDate = new Date(prompt("Введите дату окончания кредита через запятую в формате год,меся,день"));

//получаем тело кредита
const creditBody = creditSum-firstTake;
console.info(creditBody+" -body");

//узнаём месяца
const nowDate = new Date(2009, 10, 05);
console.info(nowDate);
const time = endDate.getTime() - nowDate.getTime();
//не понимаю что такое 1000 (милисекунды?), ну а дальше секунды, минуты, часы, недели, месяцa
const months = Math.floor(time/(1000*60*60*24*7*4));
console.info(months+" -month count"); 

//узнаём ставку процента в месяц
let monthPrecent = percent/12;
monthPrecent = monthPrecent/100;
console.info("percent in month "+monthPrecent);

//ежемесяный платёж
const payDay = creditBody*(monthPrecent+(monthPrecent/(((1+monthPrecent)**months)-1)));
console.info(payDay+"  payDay")

//полная сумма
let fullPaySum = payDay*months;
fullPaySum = fullPaySum.toFixed(2);

alert(`Итого = ${fullPaySum}`);

