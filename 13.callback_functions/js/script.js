'use strict';
/* --- Callback functions --- */
// function firstMsg() {
//     // Do something
//     setTimeout(function() {
//         console.log('first msg');
//     }, 500);
// };

// function secondMsg() {
//     console.log('second msg');
// };

// firstMsg();
// secondMsg();

// Hard callback - map method
// const arr = ['John', 'Shelby', 'Arthur', 'Thomas'];
// const arr2 = [];
// Получить в массиве длину каждого элемента
// => [4, 6, 6, 6]; 

// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i].length);
// };
// console.log(arr2);

// Получить в новом массиве в верхнем регистре строки из первого массива
// => ['JOHN', 'SHELBY', 'ARTHUR', 'THOMAS']
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i].toUpperCase());
// };
// console.log(arr2);

// const names = ['John', 'Shelby', 'Arthur', 'Thomas'];

// function mapArray(arr, fn) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(fn(arr[i]));
//     };
//     return res;
// };

// Добавить элементы из массива
// function namesLength(el) {
//     console.log(el);
//     return el;
// };

// Добавить длину каждой строки
// function namesLength(el) {
//     console.log(el);
//     return el.length;
// };

// Добавить в верхнем регистре
// function namesToUpperCase(el) {
//     console.log(el);
//     return el.toUpperCase();
// };

// mapArray(names, namesLength);

// const result = mapArray(names, namesLength);
// const result = mapArray(names, namesToUpperCase);
// console.log(result);



/* --- Easy callback --- */
// function getMsg(msg, foo) {
//     console.log(`I learn: ${msg}`);
//     foo();
// };

// 1)
// getMsg('JS', function() {
//     console.log('I know this lesson!');
// });

// 2)
// getMsg('JS', () => {
//     console.log('I know this lesson!!');
// })

// 3)
// function doThis() {
//     console.log('I know this lesson!!!');
// };

// getMsg('JS', doThis);


