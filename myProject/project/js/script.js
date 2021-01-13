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
      list = document.querySelector('.promo__interactive-list'),
      listItem = list.childNodes,
      btn = document.querySelector('button'),
      form = document.querySelector('.add'),
      check = document.querySelector('input[type="checkbox"]');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

console.log(movieDB.movies[(movieDB.movies.length - 1)].length);

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

function genreContent (selector, text) {
    selector.textContent = text;
}

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

promo.style.background = 'url(../img/bg.jpg)';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const filmsSort = (films) => {
    films.forEach((item, i) => {
        films[i] = item.toUpperCase();
    });

    films.sort();
};

// 5) Добавить нумерацию выведенных фильмов

const createTable = (films) => {

    list.innerHTML = '';

    films.forEach((item, i) => {
        list.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
                            <div class="delete"></div></li>`;
    });
};

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

function deleteItem() {
    listItem.forEach((item, i) => {
        item.lastChild.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            createTable(movieDB.movies);
            deleteItem();
        });
    });
} 



genreContent(genre, 'драма');
filmsSort(movieDB.movies);
createTable(movieDB.movies);
deleteItem();

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// Добавляем атрибут для формы что бы не было перезагрузки страницы при нажатии кнопки отправить

form.setAttribute('onsubmit', 'return false');

btn.addEventListener('click', () => {

    // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    // "Добавляем любимый фильм"

    if (check.checked) {
        console.log('Добавляем любимый фильм');
    }

    let filmValue = document.querySelector('.adding__input').value;

    // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    if (filmValue.length > 21) {
        movieDB.movies.push(`${filmValue.slice(0, 21)}...`);
    } else if (filmValue.length > 0) {
        movieDB.movies.push(filmValue);
    } 

    // 5) Фильмы должны быть отсортированы по алфавиту

    filmsSort(movieDB.movies);
    createTable(movieDB.movies);
    deleteItem();
});





// ================================================================================

// Выводим в консоль все узлы body

console.log(document.body.childNodes);

//Выводим в консоль только элементы body

for (let node of document.body.childNodes) {
    if (node.nodeType == 1) {
        console.log(node);
    } else {
        continue;
    }
}