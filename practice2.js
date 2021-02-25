" use strict";
const NumberOfFilms = +prompt('How many movies have you seen??')

const moviebd = {
    count: NumberOfFilms,
    movies: {}, //пустой объект 3
    actors: {},
    geners: [],
    ptivat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt("Послед фильм?", ""),
        b = prompt("Оценка?", "");
    if(a !=null && b != null && a != "" && a.length < 50){
        moviebd.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
  
}

if (moviebd.count < 10){
    console.log('norm');
} else if (moviebd.count >10 && moviebd.count < 30){
    console.log('horosh');
} else if (moviebd.count > 30){
    console.log('ogo');
} else{
    console.log('error');
}

console.log(moviebd);
