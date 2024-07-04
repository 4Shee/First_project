"use strict";

const numberOfFilms = prompt("How many films you've seen already?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}