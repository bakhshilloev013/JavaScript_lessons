'use strict';

// function getThis() {
//     console.log(this);
// };

// getThis(); // В строгом режиме: undefined -- В нестрогом режиме: объект window
// window.getThis(); // Аналогично вверхней команде
// console.log(window.getThis); // Выведет что находится внутри функции getThis

/* --- Функция как метод --- */
// 1)
// const prod1 = {
//     name: 'Intel',
//     price: 100,
//     method: getThis,
// };
// prod1.method(); // Выведет сам объект

// 2)
// const prod1 = {
//     name: 'Intel',
//     price: 100,
//     // getThis: getThis
//     getThis, // Аналогично вверхнему свойству
// };
// prod1.getThis();

// 3)
// const prod1 = {
//     name: 'Intel',
//     price: 100,
//     getPrice: function() {
//         console.log(this.price);
//     },
// };
// prod1.getPrice();

/* --- Функция как метод вывода цены --- */
function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
};

// const prod1 = {
//     name: 'Intel',
//     price: 100,
//     // getPrice,
//     method: getPrice,
// };

// // prod1.getPrice();
// prod1.method();

/* --- Функция как метод вывода имени --- */
function getName() {
  console.log(this.name);
  return this;
}

// const prod1 = {
//   name: "Intel",
//   price: 100,
//   // getName,
//   method: getName,
// };

// // prod1.getName();
// prod1.method();


/* --- Метод для вложенного объекта --- */
// const prod1 = {
//   name: 'Intel',
//   price: 100,
//   info: {
//     information: ["2.3ghz"],
//     made: "Intel Company",
//     getInfo: function () {
//       console.log(this);
//     },
//   },
// };
// prod1.info.getInfo();

// 1)
// const prod1 = {
//   name: "Intel",
//   price: 100,
//   info: {
//     information: ["2.3ghz"],
//     made: "Intel Company",
//     getInfo: function () {
//       console.log(this.information);
//     },
//     getMade: function () {
//       console.log(this.made);
//     }
//   },
// };

// prod1.info.getInfo()
// prod1.info.getMade()

// 2)
// function getInfo() {
//   console.log(this.information);
// };

// function getMade() {
//   console.log(this.made);
// }

// const prod1 = {
//   name: "Intel",
//   price: 100,
//   info: {
//     information: ["2.3ghz"],
//     made: "Intel Company",
//     getInfo,
//     // getInfo: getInfo,
//     getMade,
//     getMade: getMade,
//   },
// };

// prod1.info.getInfo();
// prod1.info.getMade();

/* --- Пример с другим объектом --- */
/* РАCКОМЕНТИРУЙТЕ ФУНКЦИЮ getPrice !!! */

const prod2 = {
  name: 'AMD',
  price: 120,
  // getPrice: getPrice,
  getPrice,
};

// prod2.getPrice();

/* --- Пример с вводом функции в объекте --- */
const prod1 = {
  name: 'Intel',
  price: 100,
  getName() {
    console.log(this.name);
  },
};

// prod1.getName(); 

/* ВЛоженную функцию можно передать в другой объект как свойство  */
// prod2.getName = prod1.getName; // Передаём объекту prod2 свойство из объекта prod1
// prod2.getName(); // Выведет AMD

/* --- Методы как цепочки --- */
let str = 'Hello world';
const reverseStr = str.split('').reverse().join(''); // Методы в цепочку 1)split - делает из строки массив 2)reverse - переворачивает массив 3)join - создаёт из массива строку

// const reverseStr = str // Методы в цепочку - ЧИТАЕМЫЙ ВИД
//   .split("") // 1)split - делает из строки массив: ['H', 'e'...]
//   .reverse() // 2)reverse - переворачивает массив: ['d', 'l'...]
//   .join(""); // 3)join - создаёт из массива строку: dlrow olleH

// console.log(reverseStr); // Выведет строку перевертыш


/* --- Методы в цепочку для объектов --- */
/* РАСКОМЕНТИРУЙТЕ ФУНКЦИИ getName и getPrice */

const prod3 = {
  name: 'ARM',
  price: 50,
  getName,
  getPrice,
};

// prod3.getName().getPrice(); // Сработает первый метод но второй выведет ошибку. Так как у строки AMD нет метода getPrice
/* Чтобы цепочка сработала, каждая функция(функции как методы) должна возвращать this */


/* --- Метод call --- */
// getPrice.call(prod3); // Данный метод принимает 2 аргумента 1) объект или указываемый элемент 2) значение для аргумента используемой ФУНКЦИИ
// getPrice.call(prod3, '@'); // Данный метод принимает 2 аргумента 1) объект или указываемый элемент 2) значение для аргумента используемой ФУНКЦИИ