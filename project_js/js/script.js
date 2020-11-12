'use strict';

// let number = 5;
// const leftBorderWidth = 10;
// console.log(leftBorderWidth);

// const result = confirm ('Are you here?');

// console.log( typeof(result) );

// alert(`Привет, ${name}`);

// let num = 50;

// switch (num) {
//     case 49: 
//         console.log('Не верно');
//         break;
//     case 100: 
//         console.log('Не верно');
//         break;
//     case 50: 
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// };

//  Practice_1

// let numberOfFilms = +prompt("How many films have you watched?", ""),

//    let  personalMovieDB = {
//         count: 25,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };

    // a = prompt("One of the last movies you watched?", ""),
    // b = prompt("How much would you rate it?", ""),
    // c = prompt("One of the last movies you watched?", ""),
    // d = prompt("How much would you rate it?", "");

// personalMovieDB.movies[a] = b;

// personalMovieDB.movies[c] = d;


//  Practice_2

// let a,
//     b;


// for (let i = 1; i <= 2; i++) {
  
//     do {
//         a = prompt("One of the last movies you watched?", "");
//     } while ( (a == null) || (a.length > 50) || (a == ''));
  
//     b = prompt("How much would you rate it?", "");
//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

//  Practice_3

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);    
    }
 }

function writeYourGenres() {

    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`What is your favorite genre on number ${i}?`, '');
    }
}

let a,
    b;

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
  
    do {
        a = prompt("One of the last movies you watched?", "");
    } while ( (a == null) || (a.length > 50) || (a == ''));
  
    b = prompt("How much would you rate it?", "");
    personalMovieDB.movies[a] = b;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

writeYourGenres();

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);
