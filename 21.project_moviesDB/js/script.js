/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/**
 * 1) Sahifaning o'ng tomonidan reklama qismini yo'qoting
 * 2) Filmning "комедия" janrini "драма" ga o'zgartiring
 * 3) Bosh fonda turgan rasmni "bg.jpg" ga o'zgartiring. Rasm img papkada joylashgan
 * 4) Filmlar ro'yxatini ushbu JS dokumentda berilgan ma`lumotlardan tuzing. Ro'xatni alfavit bo'yicha sortirovka qiling
 * 5) Ro'yxat elementlarini son bilan belgilang
 */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 4, 5
// movieDB.movies.sort();
// const listItems = document.querySelectorAll('.promo__interactive-item');

// listItems.forEach((item, i, arr) => {
//     // item.textContent = `${i+1}.${movieDB.movies[i]}`;
//     item.textContent = (i+1) + '.' + movieDB.movies[i];
//     item.innerHTML += `<div class='delete'></div>`;
// })