'use strict';
// 1)
// function logThis() {
//     console.log(this); // undefined
// };
// logThis(); // В сторогом режиме undefined, без строгого режима window

// 2)
// function showThis(a, b) {
//     console.log(this); // undefined
//     function sum() {
//         console.log(this); // undefined
//         // return this.a + this.b; // Ошибка потому что у undefined нет свойства "a" и "b";
//         return a + b; // Замыкание функции - JS ищет переменные "a" и "b" сначала внутри этой функции(sum), потом снаружи(showThis)
//     }

//     console.log(sum());
// };
// showThis(4, 5);  

// 3)
// const obj = {
//     a: 4,
//     b: 6,
//     sum: function() {
//         // console.log(this); // Выведет сам объект
//         function shout() {
//             console.log(this); // undefined
//         }

//         shout();
//     }
// };

// obj.sum()

// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, "Smith"); // С помощью call функция приобрела свою контекст вызова P.S: в call значения для аргументов передаётся сразу после запитой
// sayName.apply(user, ["Alex"]); // С помощью apply функция приобрела свою контекст вызова P.S: в call значения для аргументов передаётся сразу после запитой внутри массива

// 5)
// function count(num) {
//     return this * num;
// }

// const double = count.bind(3);
// console.log(double(3));
// console.log(double(12));

// 6)
// const btn = document.querySelector("button");
// btn.addEventListener("click", function() { // если функция обычная контекст вызова это сам элемент на который повешан обработчик события, если функция стрелочная то контекст вызова потеряется
//     this.style.backgroundColor = "red";
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say(); // Выведет сам объект потому что функция стрелочная. P.S: так как родительская функция ссылается на объект поэтому и внутреняя стрелочная функция тоже будет ссылаться на объект 
//     }
// };

// obj.sayNumber();

/**
 * Контекст вызова(this) у функции в строгом режиме: это undefined; в обычном режиме: это window;
 * Контекст вызова(this) у методов объекта: это сам объект
 * Контекст вызова(this) в конструкторах и классах: это новый экземпляр объекта 
 * Ручная привязка контекста вызова(this): call, apply, bind
 */