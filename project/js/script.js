/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promo = document.querySelector('.promo__bg'),
      genre = promo.querySelector('.promo__genre'),
      adv = document.querySelectorAll('.promo__adv img'),
      list = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

function genreContent (selector, text) {
    selector.textContent = text;
}

genreContent(genre, 'драма');

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

promo.style.background = 'url(../img/bg.jpg)';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

movieDB.movies.sort();

// 5) Добавить нумерацию выведенных фильмов

list.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    list.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
                        <div class="delete"></div></li>`;
});