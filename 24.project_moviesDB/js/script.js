/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let imagesWrapper = document.querySelector('.promo__adv'),
        images = imagesWrapper.querySelectorAll('img'),
        genre = document.querySelector('.promo__genre'),
        promo = document.querySelector('.promo__bg'),
        list = document.querySelector('.promo__interactive-list'),
        listItems = list.querySelectorAll('.promo__interactive-item');
    
    // 1)
    for (let i = 0; i < images.length; i++) {
        images[i].remove();
    };
    // 2)
    genre.textContent = 'драма';
    // 3)
    promo.style.cssText = `background: url('../img/bg.jpg') center center/cover no-repeat`;
    // 4, 5)
    movieDB.movies.sort();
    listItems.forEach(item => {
        item.remove();
    });
    movieDB.movies.forEach((item, i, arr) => {
        list.innerHTML += 
        `<li class="promo__interactive-item">${i+1}.${item}
            <div class ="delete"></div>
        </li>`;
    });
})
