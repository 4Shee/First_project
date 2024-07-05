"use strict";

const start = function () {
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

const showMyDB = function (obj) {
  if (obj.private == false) {
    return console.log(obj);
  }
  return console.log('This is a private object');
};

const writeYourGenres = function (obj) {
  for (let i = 0; i < 3; i++) {
    obj.genres[i] = prompt(`Your ${i + 1} favorite genre?`)
  }
};

const compareFilmsNumber = function (obj) {
  if (obj.count < 10) {
    alert("You have watched a few films");
  } else if (obj.count > 10 && obj.count < 30) {
    alert("You are a common viewer");
  } else if (obj.count > 30) {
    alert("You are a cinephile");
  }
};

const getFilmName = function () {
  for (; ;) {
    const lastFilmName = prompt("One of the last film what you have seen?", '');
    if (checkConditions(lastFilmName)) {
      continue;
    } return lastFilmName;
  }
};

const getFilmRating = function () {
  while (true) {
    const ratingOfFilm = prompt("Wich rating you want to give it?", '');
    if (checkConditions(ratingOfFilm)) {
      continue;
    } return ratingOfFilm;
  }
};

const addFilmAndRating = function (obj) {
  do {
    obj.movies[getFilmName()] = getFilmRating();
  }
  while (prompt('Want to rate another film?(y-yes)', '').toLowerCase() === 'y')
};

const personalMovieDB = {
  count: start(),
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

compareFilmsNumber(personalMovieDB);

writeYourGenres(personalMovieDB);

addFilmAndRating(personalMovieDB);

showMyDB(personalMovieDB);