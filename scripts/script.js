"use strict";

const numberOfFilms = prompt("How many films you've seen already?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};


let lastFilmName = prompt("One of the last film what you have seen?", '');
let ratingOfFilm = prompt("Wich rating you want to give it?", '');

personalMovieDB.movies[lastFilmName] = ratingOfFilm;

lastFilmName = prompt("One of the last film what you have seen?", '');
ratingOfFilm = prompt("Wich rating you want to give it?", '');

personalMovieDB.movies[lastFilmName] = ratingOfFilm;

console.log(personalMovieDB);