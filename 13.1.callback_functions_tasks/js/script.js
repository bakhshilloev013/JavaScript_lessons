'use strict';
/*
    1. Создать две функции и дать им осмысленные названия:
    - первая функция принимает массив и колбэк (одна для всех вызовов)
    - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

    Первая функция возвращает строку “New value: ” и результат обработки:

    firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
    firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
    firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
    “New value: Jhon is 45, Aaron is 20,”
    firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


    Подсказка: secondFunc должна быть представлена функцией, которая принимает
    один аргумент (каждый элемент массива) и возвращает результат его обработки

    2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
    функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.
*/

/* --- Task - 1 --- */
const arr1 = ['my', 'name', 'is', 'Trinity'],
      arr2 = [10, 20, 30],
      arr3 = [{age: 45, name: 'John',}, {age: 20, name: 'Franklin'}],
      arr4 = ['abc', '123'];

function bigFoo(arr, call) {
    return `New value: ${call(arr)}`;
};

// 1)
// function callbackStr(arr) {
//     let res = '';
//     for (let value of arr) {
//         res += value[0].toUpperCase() + value.slice(1);
//     };
//     return res;
// };

// const result = bigFoo(arr1, callbackStr);

// 2)
// function callbackNum(arr) {
//     let res = '';
//     for (let value of arr) {
//         res += `${value * 10}, `;
//     };
//     return res;
// };

// const result = bigFoo(arr2, callbackNum);

// 3) FINISHED AMOUNT 80 - 90%
// function callbackObj(arr) {
//     let res = '';
//     for (let value of arr) {
//         for (let key in value) {
//             res += value[key] + ' ';
//         };
//     };
    
//     for (let value of arr) {
//        for (let key in value) {
//         if (typeof(value[key]) === 'number') {
//             res += value[key] + ' is ';
//         } else {
//             res += value[key] + ' ';
//         };
//        };
//     };
//     return res;
// };

// const result = bigFoo(arr3, callbackObj);

// 4)
// function callbackReverseStr(arr) {
//     let res = '';
//     for (let value of arr) {
//         res += `${value.split('').reverse().join('')}, `;
//     };
//     res = res.slice(0, res.length - 2); // Чтобы убрать запитую в конце
//     return res;
// };

// const result = bigFoo(arr4, callbackReverseStr);
// console.log(result);

/* --- Task - 2 --- */
// const arrayOfNum = [1, 3, 14, 5, 22];

// function every(arr, call) {
//     if (Array.isArray(arr) && typeof(call) === 'function') {
//         if (call(arr)) {
//             return true;
//         } else {
//             return false;
//         };
//     }
// };

// function callBackFoo(arr) {
//     let res;
//     arr.forEach((item, i, arr) => {
//         res = item > 5;
//         // console.log(res);
//     });
//     return res;
// };

// const result = every(arrayOfNum, callBackFoo);
console.log(result);