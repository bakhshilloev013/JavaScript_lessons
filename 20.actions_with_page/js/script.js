'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      hearts = document.querySelectorAll('.heart'),
      currentHeart = document.getElementsByClassName('heart')[2],
      circles = document.querySelectorAll('.circle'),
      wrapper = document.querySelector('.wrapper');

/* --- Стили --- */
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// let num = 500 + 'px';

// box.style.cssText = `background-color: blue; width: 500px`;
// box.style.cssText = `background-color: blue; width: ${num}`;

// hearts.style.backgroundColor = 'green'; // Error
// currentHeart.style.backgroundColor = 'green';

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green'; //Работает только если элемент вызван с помощью querySelector
// });

/* --- Создавать элементы и классы --- */
const div = document.createElement('div');
// const el = document.createTextNode('I was here!');

// div.className = 'black';
div.classList.add('black');
// div.classList.remove('black');


document.body.append(div); // Добавляет в конец body
// document.querySelector('.wrapper').append(div); // Добавляет во внутрь блока wrapper
// wrapper.append(div); // Аналогично вверхнему коду
// wrapper.prepend(div); // Добавляет в начало блока wrapper
// hearts[1].before(div); // Добавляет перед вторым сердечком
// hearts[1].after(div); // Добавляет после второго сердечка

// circles[0].remove(); // Удаляет со страницы первый круглешок

// hearts[1].replaceWith(circles[0]); //Заменяет второе сердечко на первый круглешок

// wrapper.insertBefore(div, hearts[0]); // Добавляет указанный элемент(1й аргуменет) перед выбранным элементом(2й аргумент) 
// wrapper.removeChild(hearts[2]); // Удаляет указанный элемент из родителя

// div.innerHTML = 'Hello world!';
// div.textContent = 'Hello world!';
// div.innerHTML = `<a href='#'>Click me</a>`;
// div.textContent = `<a href='#'>Click me</a>`;

// div.insertAdjacentHTML('beforebegin', `<a href="#">Click me please!</a>`); // Добавляет указываемый HTML кол перед или после манипулируемого объекта 
// div.insertAdjacentHTML('afterbegin', `<a href="#">Click me please!</a>`);
// div.insertAdjacentHTML('afterend', `<a href="#">Click me please!</a>`);
// div.insertAdjacentHTML('beforeend', `<a href="#">Click me please!</a>`);