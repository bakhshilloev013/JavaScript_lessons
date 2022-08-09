'use strict';
/* --- Events --- */
/**
 * onclick in HTML
 * onclick in JS
 * eventlistener
 */

const btn = document.querySelector('button'),
      link = document.querySelector('a');
/* --- ocnlick --- */
// btn.onclick = function() {
//     console.log('click');
// }
// Нельзя присваивать несколько подобных обработчиков событий!
// Пример:
// btn.onclick = function() {
//     console.log('click 2');
// }

/* --- addEventListener --- */
// btn.addEventListener('click', () => {
//     console.log('click');
// });
// Этим способом можно вешать несколько обработчиков событий
// Пример:
// btn.addEventListener('click', () => {
//     console.log('click 2');
// });

/* --- event object --- */
// btn.addEventListener('click', function(e /* e или event */) {
//     console.log(e);
// });

// link.addEventListener('click', (e) => {
//     e.preventDefault(); // Отмена стандартного события страницы
// })

 /* --- Вынос обработчика на внешнюю функцию --- */
// function clickLink(e) {
//     e.preventDefault();
//     console.log('click');
// }; 

// link.addEventListener('click', clickLink);

/* --- Отмена обработчика событий --- */
// link.removeEventListener('click', clickLink);

/* --- Разница между function и () => --- */
// btn.addEventListener('click', e => {
//     console.log(this); //Window
// });

// link.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(this); // HTML element
// })

// link.addEventListener('click', clickHandler);

// function clickHandler(e) {
//     e.preventDefault();
//     console.log(this); // HTML element
// }


