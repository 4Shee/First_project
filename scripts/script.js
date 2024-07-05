"use strict";

let start = function () {
  for (; ;) {
    const numberOfFilms = +prompt("How many films you've seen already?", '');
    if (numberOfFilms == null
      || numberOfFilms == ''
      || isNaN(numberOfFilms)) {
      continue;
    }
    return numberOfFilms;
  }
};

let showMyDB = function (obj) {
  if (obj.private == false) {
    return console.log(obj);
  }
  return console.log('This is a private object');
};

const personalMovieDB = {
  count: start(),
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
}

for (; ;) {
  const lastFilmName = prompt("One of the last film what you have seen?", '');
  if (lastFilmName === null
    || lastFilmName === ''
    || lastFilmName.length > 50) {
    continue;
  }

  while (true) {
    const ratingOfFilm = prompt("Wich rating you want to give it?", '');
    if (ratingOfFilm === null
      || ratingOfFilm === ''
      || ratingOfFilm.length > 50) {
      continue;
    }
    personalMovieDB.movies[lastFilmName] = ratingOfFilm;
    break;
  }

  if (prompt("Want to quit?(Q - quit)", '').toUpperCase() === 'Q') {
    break;
  }
}

showMyDB(personalMovieDB);