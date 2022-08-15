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
    
    const imagesWrapper = document.querySelector('.promo__adv'),
        images = imagesWrapper.querySelectorAll('img'),
        genre = document.querySelector('.promo__genre'),
        promo = document.querySelector('.promo__bg'),
        list = document.querySelector('.promo__interactive-list'),
        listItems = list.querySelectorAll('.promo__interactive-item'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        btn = document.querySelector('button');
    

    // 1)
    function deleteAdv(arr) {
        for (let i = 0; i < arr.length; i++) {
            images[i].remove();
        };
    };
    deleteAdv(images);

    // 2, 3)
    function makeChanges() {
        genre.textContent = 'драма';
        promo.style.cssText = `background: url('../img/bg.jpg') center center/cover no-repeat`;
    };
    makeChanges();

    // 4, 5)
    // movieDB.movies.sort();
    // movieDB.movies.forEach((item, i) => {
    //     list.innerHTML += 
    //     `<li class="promo__interactive-item">${i+1}.${item}
    //         <div class ="delete"></div>
    //     </li>`;
    // })
    
    function sortArr(arr) {
        arr.sort();
    };

    /* Начальный функционал для преобразования списка из базы данных */
    // P.S: Этот же функционал может в дальнейшем ещё использоваться, поэтому действия находятся в функции
    /**
     * 
     * @param {*} moviesArr => movieDB.movies
     * @param {*} parent  => list => <ul></ul>
     */
    function addMovies(moviesArr, parent) {
        parent.innerHTML = '';
        sortArr(moviesArr);
        moviesArr.forEach((item, i, arr) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i+1}.${item}
                <div class ="delete"></div>
            </li>`;
        });
        
        /* Функционал удаления элемента списка */
        document.querySelectorAll('.delete').forEach((item, i) => { // Вызываем каждую корзину
            item.addEventListener('click', e => { // Вешаем на каждую корзину обработчик события
                item.parentElement.remove(); // Удаляем родительский элемент
                moviesArr.splice(i, 1); // Удаляем с базы данных P.S: splice(i => индекс в массиве, 1 => сколько элементов удалить)

                addMovies(moviesArr, parent); // Рекурсия вызов этой же функции внутри себя (самовызов);
            })
        })
    };
    addMovies(movieDB.movies, list);

    /* --- Task 2 --- */
    btn.addEventListener('click', btnClick);

    /* Функционал при клике на кнопку и вызов функций */
    function btnClick(e) {
        e.preventDefault();
        if (input.value != '' && input.value != null) {
            input.removeAttribute('style');
            checkLength(movieDB.movies, input.value); // Вызов функции проверки на длину строки
            checkbox(e); // Функционал галочки вызывается тут потому что действие галочки сработает при клике на кнопку
        } else {
            input.style.cssText = 'border: 2px solid red';
        };
    };

    /* Проверка на длину строки */
    function checkLength(moviesArr, value) {
        if (value.length > 21) {
            value = value.slice(0, 21) + '...';
            moviesArr.push(value);           
        } else {
            moviesArr.push(value);
        };
        addList(moviesArr); 
    };

    /* Добавление строки в список фильмов */
    function addList(moviesArr) {
        sortArr(moviesArr);
        addMovies(movieDB.movies, list); // Вызов начального функционала для преобразования списка с новым значением
        input.value = '';
    };

    /* Проверка на наличие галочки */
    function checkbox(event) {
        let check = document.querySelector('[type="checkbox"]');
        if (check.checked) {
            alert('Добавляем любимый фильм');
        } else {
            console.log('Галочка отсутсвует.');
        };
    };

})
