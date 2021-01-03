'use strict';

// let number = 5;
// const leftBorderWidth = 10;
// console.log(leftBorderWidth);

// Отображает модальное окно с двумя вариантами ответа 

// const result = confirm ('Are you here?'); 

// console.log( typeof(result) );

// let nam = 'Paul';

// alert(`Привет, ${nam}`);

// let num = 50;

// Функция сравнивает полученное значение с определёнными значениями

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
// let a, b, c, d;

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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("How many films have you watched?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many films have you watched?", "");
//     }
// }

// start();

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("How many films have you watched?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched?", "");
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <=3; i++) {
            personalMovieDB.genres[i-1] = prompt(`What is your favorite genre on number ${i}?`, '');
            while (personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
                personalMovieDB.genres[i-1] = prompt(`What is your favorite genre on number ${i}?`, '');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);    
        });
    },
    rememberMyFilms:() => {
        let a,
        b;
    
        for (let i = 1; i <= 2; i++) {
      
        do {
            a = prompt("One of the last movies you watched?", "");
        } while ( (a == null) || (a.length > 50) || (a == ''));
      
        b = +prompt("How much would you rate it?", "");
        personalMovieDB.movies[a] = b;
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);  
        }  
    },
    toggleVisibleMyDB: () => {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;    
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.start();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);    
//     }
// }

// function writeYourGenres() {

//     for (let i = 1; i <=3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`What is your favorite genre on number ${i}?`, '');
//     }
// }

// function rememberMyFilms() {
//     let a,
//     b;

//     for (let i = 1; i <= 2; i++) {
  
//     do {
//         a = prompt("One of the last movies you watched?", "");
//     } while ( (a == null) || (a.length > 50) || (a == ''));
  
//     b = +prompt("How much would you rate it?", "");
//     personalMovieDB.movies[a] = b;
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// rememberMyFilms();

// writeYourGenres();

// detectPersonalLevel();

// showMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);

// for (let key in personalMovieDB) {
//     if (typeof(personalMovieDB[key]) === 'object') {
//         for (let i in personalMovieDB[key]) {
//             console.log(`Свойство ${i} имеет значение ${personalMovieDB[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${personalMovieDB[key]}`);
//     }
// }

// console.log((Object.keys(personalMovieDB)).length);

// let arr = [2, 3, 6, 8, 10];

// Метод перебора данных в массиве, первый способ:

// for (let i of arr) {
//     console.log(i);
// }

// Метод перебора данных в массиве, второй способ: 

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);    
// });

// let numbers = {
//     a: 5,
//     b: 10,
//     c: {
//         d: 11,
//         e:12
//     }
// };

// let add = {
//     f: 13,
//     g:14
// };

// console.log(Object.assign(numbers, add));

// const oldArray = ['k', 'e', 'a'];

// const newArray = oldArray.slice(2);

// console.log(newArray);

// const plusArray = [...oldArray, ...newArray, 'lastName'];

// console.log(plusArray);

// const q = {
//     one: 1,
//     two: 2
// };

// const r = {...q};

// console.log(r);


console.log(typeof(Number('5')));