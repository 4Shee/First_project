"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    for (; ;) {
      const numberOfFilms = +prompt("How many films you've seen already?", '');
      if (this.checkConditions(numberOfFilms) || isNaN(numberOfFilms)) {
        continue;
      }
      this.count = numberOfFilms;
      break;
    }
  },
  checkConditions: function (value) {
    if (value == null
      || value == ''
      || value.length > 50
    ) {
      return true
    }
    return false
  },
  showMyDB: function () {
    if (!this.private) {
      return console.log(this);
    }
    return console.log('This is a private object');
  },
  compareFilmsNumber: function () {
    if (this.count < 10) {
      alert("You have watched a few films");
    } else if (this.count > 10 && this.count < 30) {
      alert("You are a common viewer");
    } else if (this.count > 30) {
      alert("You are a cinephile");
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      this.genres[i] = prompt(`Your ${i + 1} favorite genre?`)
    }
  },
  addFilmAndRating: function () {
    do {
      this.movies[this.getFilmName()] = this.getFilmRating();
    }
    while (prompt('Want to rate another film?(y-yes)', '').toLowerCase() === 'y')
  },
  getFilmName: function () {
    for (; ;) {
      const lastFilmName = prompt("One of the last film what you have seen?", '');
      if (this.checkConditions(lastFilmName)) {
        continue;
      } return lastFilmName;
    }
  },
  getFilmRating: function () {
    while (true) {
      const ratingOfFilm = prompt("Wich rating you want to give it?", '');
      if (this.checkConditions(ratingOfFilm)) {
        continue;
      } return ratingOfFilm;
    }
  },
  toggleVisibleMyDB: function () {
    if (this.private) {
      this.private = false;
    } else {
      this.private = true;
    }
  }
};

personalMovieDB.start();

personalMovieDB.compareFilmsNumber();

personalMovieDB.writeYourGenres();

personalMovieDB.addFilmAndRating();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();