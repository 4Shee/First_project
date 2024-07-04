"use strict";

const numberOfFilms = prompt("How many films you've seen already?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

let lastFilmName;
let ratingOfFilm;

do {
  lastFilmName = prompt("One of the last film what you have seen?", '');
  ratingOfFilm = prompt("Wich rating you want to give it?", '');
  personalMovieDB.movies[lastFilmName] = ratingOfFilm;
}
while (prompt("Want to say another one?(Y/N)", '') === 'Y');

console.log(personalMovieDB);