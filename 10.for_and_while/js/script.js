"use strict";

/* --- while, do while, for, for of, for in --- */
// let index = 0;

// while(index < 10) { // Пока результат проверки выражения будет true тело цикла будет выполнятся
//     console.log(index); //Тело цикла - действие цикла
//     i++; // Тело цикла - действие цикла
// };

// while(index++ < 10) { // Пример с выводом до 10
//     console.log(index);
// };

// index = 10;
// while(i--) { // Проверка выражения где инкремент срабатывает в следующем шагу
//     console.log(index); // Тело цикла сработает до 0
// };

// do { // Сначала сработает тело цикла а потом будет проверка
//     console.log("some action"); // Тело цикла - действие цикла
// } while(index < 10); // Проверка выражения

/* --- for --- */
// for (let i = 0; i < 10; i++) { // У данной конструкции есть 3 аргумента и тело: 1) объявление итератора 2) проверка выражения 3)итератор с обязательным инкрементом
//     console.log(`value of i: ${i}`); // Тело цикла - действие цикла
// };

// Пример с длиной строки
// let str = 'Hello',
//     res = '';

// for (let i = 0; i < str.length; i++) { // Цикл будет работать пока не достигшнет длины строки str
//     console.log(str[i]); // Вывод в консоли каждого символа строки str по индексу
//     res += str[i];  // Добавляем в строку res символы из строки str по индексу
//     res = res + str[i];
// };

// console.log(`new value of res: ${res}`); // Выводим результат цикла

// Пример с массивом
// let colors = ["black", "white", "blue", "red", "purple"];

// for (let i = 0; i < colors.length; i++) { // Цикл будет работать пока не достигнет длины массива
//     console.log(colors[i]); // Вывод элементов массива по индексу
//     colors[i] = colors[i].toUpperCase(); // Переопределение/изменение элементов массива по индексу
// };

// console.log(colors); // Вывод результата массива

/* --- break and continue --- */
// let num = 10;

// for (let i = 0; i < num; i++) {
//     if (i === 5) { 
//         continue; // когда итератор будет равен 5 цикл пропустит данную итерацию
//     }
//     console.log(i);
//     if (i === 7) {
//         break; // когда итератор будет равен 7 цикл остановится
//     };
// };

// Пример с объектами в массиве
// const users = [ {name: "Thomas", age: 30}, {name: "Arthur", age: 35}, {name: "John", age: 25}, {name: "Eida", age: 32} ];
// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     console.log(users[i].name);
//     console.log(users[i].age);
// };

// for (let i = 0; i < users.length; i++) {
//     usersObj[users[i].name] = users[i];
// };

// console.log(usersObj);
// console.log(usersObj['Arthur']);


/* --- for in --- */
// let user = {
//     firstName: "John",
//     lastName: "Snow",
//     age: 22
// };

// for (let key in user) { // Перебор ключей из массива. Итератор не обязательно называть "key"
    // console.log(key); // Вывод ключей объекта
    // console.log(user[key]); // Вывод значения ключей объекта
// }

/* --- for of --- */
// Разкомментируйте массив users!
// for (let value of users) { //Переберёт все элементы массива. В нём существуют break и continue
//     console.log(value);
// }