"use strict";

let start = function () {
  for (; ;) {
    const numberOfFilms = +prompt("How many films you've seen already?", '');
    if (checkConditions(numberOfFilms) || isNaN(numberOfFilms)) {
      continue;
    }
    return numberOfFilms;
  }
};

function checkConditions(value) {
  if (value == null
    || value == ''
    || value.length > 50
  ) {
    return true
  }
  return false
}

let showMyDB = function (obj) {
  if (obj.private == false) {
    return console.log(obj);
  }
  return console.log('This is a private object');
};

let writeYourGenres = function (obj) {
  for (let i = 0; i < 3; i++) {
    obj.genres[i] = prompt(`Your ${i + 1} favorite genre?`)
  }
};

const personalMovieDB = {
  count: start(),
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

writeYourGenres(personalMovieDB);

if (personalMovieDB.count < 10) {
  alert("You have watched a few films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert("You are a common viewer");
} else if (personalMovieDB.count > 30) {
  alert("You are a cinephile");
}

for (; ;) {
  const lastFilmName = prompt("One of the last film what you have seen?", '');
  if (checkConditions(lastFilmName)) {
    continue;
  }

  while (true) {
    const ratingOfFilm = prompt("Wich rating you want to give it?", '');
    if (checkConditions(ratingOfFilm)) {
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