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

for (let i = 0; ;) {
  lastFilmName = prompt("One of the last film what you have seen?", '');
  if (lastFilmName === null
    || lastFilmName === ''
    || lastFilmName.length > 50) {
    continue;
  };
  for (let j = 0; ;) {
    ratingOfFilm = prompt("Wich rating you want to give it?", '');
    if (ratingOfFilm === null
      || ratingOfFilm === ''
      || ratingOfFilm.length > 50) {
      continue;
    };
    break;
  };
  personalMovieDB.movies[lastFilmName] = ratingOfFilm;
  if (prompt("Want to say another one?(Y/N)", '') === 'N') {
    break;
  };
};

console.log(personalMovieDB);