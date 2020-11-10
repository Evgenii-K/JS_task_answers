"use strict";

// let number = 5;
// const leftBorderWidth = 10;
// console.log(leftBorderWidth);

// const result = confirm ('Are you here?');

// console.log( typeof(result) );

// alert(`Привет, ${name}`);


const numberOfFilms = +prompt("How many films have you watched?", ""),

    personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
},

    a = prompt("One of the last movies you watched?", ""),
    b = prompt("How much would you rate it?", ""),
    c = prompt("One of the last movies you watched?", ""),
    d = prompt("How much would you rate it?", "");

personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
