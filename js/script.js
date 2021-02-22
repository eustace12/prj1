" use strict";
const NumberOfFilms = +prompt('How many movies have you seen??')

const moviebd = {
    count: NumberOfFilms,
    movies: {},//пустой объект 
    actors: {},
    geners: [],
    ptivat: false
};


const a = prompt( "Послед фильм?",""),
      b = prompt("dfdf?", ""),
      c = prompt("dfsssdf?", ""),
      d = prompt("dfdffffff?", "");

  moviebd.movies[a]=b; 
  moviebd.movies[c]=d; 
  
  console.log(moviebd);