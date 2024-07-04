"use strict";

let numberOfFilms;

do {
  numberOfFilms = prompt("How many films you've seen already?", '');
}
while (
  numberOfFilms == null
  || numberOfFilms == ''
  || numberOfFilms < 0
);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

if (personalMovieDB.count < 10) {
  alert("You have watched a few films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert("You are a common viewer");
} else if (personalMovieDB.count > 30) {
  alert("You are a cinephile");
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

  while (true) {
    ratingOfFilm = prompt("Wich rating you want to give it?", '');
    if (ratingOfFilm === null
      || ratingOfFilm === ''
      || ratingOfFilm.length > 50) {
      continue;
    };
    break;
  };

  personalMovieDB.movies[lastFilmName] = ratingOfFilm;
  if (prompt("Want to say another one?(Y/N)", '').toUpperCase() === 'N') {
    break;
  };
};

console.log(personalMovieDB);