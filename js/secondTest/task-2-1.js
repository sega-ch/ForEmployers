const movies = ["Выстрел в пустоту", "Остров проклятых", "Волк с Уолл-Стрит"];
let watchedMovies = [];

for (let i = 0; i < movies.length; i++)
{
    let isWatched = confirm(`Смотрел ли ты ${movies[i]}?`);

    if (isWatched === true){
        watchedMovies.push(movies[i]);
    }  
    
}

alert(`Фильмы которые ты смотрел: ${watchedMovies} `);

//Стандартное решение, что должно быть в теле цикла
// if (isWatched === true)
//     {
        
//         watchedMovies.push("Да");
//     }
//     else
//     {
//         watchedMovies.push("Нет");
//     }