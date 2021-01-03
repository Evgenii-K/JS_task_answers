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

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.



form.setAttribute('onsubmit', 'return false');

btn.addEventListener('click', () => {

    // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    // "Добавляем любимый фильм"

    if (check.checked) {
        console.log('Добавляем любимый фильм');
    }

    list.innerHTML = '';
    movieDB.movies.push(document.querySelector('.adding__input').value);

    // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    if (movieDB.movies[(movieDB.movies.length - 1)].length > 21) {
        let longName = movieDB.movies[(movieDB.movies.length - 1)].slice(0, 21);
        movieDB.movies.pop();
        movieDB.movies.push(longName + '...');
    }

    // 5) Фильмы должны быть отсортированы по алфавиту

    movieDB.movies.forEach((item, i) => {
        movieDB.movies[i] = item.toUpperCase();
    });

    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        list.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
                            <div class="delete"></div></li>`;
    });

    deleteItem();

    return false;
});

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

function deleteItem() {
    listItem.forEach(item => {
        item.lastChild.addEventListener('click', () => {
            item.remove();
        });
    });
} 

deleteItem();