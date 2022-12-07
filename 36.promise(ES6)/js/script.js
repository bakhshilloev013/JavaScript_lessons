"use strict";

/* --- Асинхронные примеры --- */

// синхронный код
// console.log("Запрос данных...");

// асинхронный код => Callback hell
// setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//         name: "TV",
//         price: 2000
//     }
//    // цепочка колбеков
//     setTimeout(() => {
//         product.status = "order";
//         console.log(product);
//     }, 2000);
// }, 2000);

// Promise берёт коллбэк с двумя аргументами: 1) resolve; 2) reject;
// resolve это когда код правильно работает
// reject когда произошла ошибка
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Подготовка данных...");

//       const product = {
//         name: "TV",
//         price: 2000,
//         };
        
//         resolve(product);
//     }, 2000);
// });

// // обращаемся к промису и к его аргументу resolve иначе говоря then работает когда вызван resolve, или наоборот catch работает когда вызван reject
// req.then((product) => {
//     setTimeout(() => {
//       product.status = "order";
//       console.log(product);
//     }, 2000);
// });

/* --- Преимущества промисов --- */
// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// // Внутри then мы возвращаем новый промис и передаём его по цепочке, это лучше чем передавать через коллбеки
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           product.status = "order";
//           resolve(product);
//         });
//   }, 2000);
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// })

/* --- Методы all и race --- */
// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => { console.log('1000 ms') });
// test(2000).then(() => { console.log('2000 ms') });

// обращаемся ко всем промисам они все должны быть внутри массива этот метод all переберёт/выполнит все промисы а потом выполнит то что у него стоит в then
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("All promises resolved");
// });

// race выполнит свои действия когда один из промисов заработает быстрее остальных
// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("All promises resolved");
// });