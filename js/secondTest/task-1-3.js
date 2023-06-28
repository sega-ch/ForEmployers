let persons = ["Ваня", "Петя", "Вова"];

persons[0] = "Иван Петров";
persons[1] = "Пётр Филипов";
persons[2] = "Владимир Пастухов";


console.info(persons+" start");

persons.shift();
persons.push("Иван Петров", "Дима Тиханов");
persons.pop();
persons.unshift("Дима Тиханов");

console.info(persons+" end");