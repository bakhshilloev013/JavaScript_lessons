"use strict";

/* Logic operators & if statement - Логические операторы & условнвый оператор */
/**
 * &&
 * ||
 * !
 * !!
 * ??
 */

let value;

// value = 1 > 2;
// value = 1 >= 2;
// value = 1 == 1;
// value = 1 == "1";
// value = 1 == true;
// value = 1 === "1";
// value = 1 === 1;
// value = 1 != "1";
// value = 1 !== "1";
// value = "a" > "A";
// value = "ab" > "ac";
// value = "a".charCodeAt();

// console.log(value);

// if (условие) {
//     // actions
// } else {
//     // else actions
// };

// value = 10;

// if (value === 10) {
//     console.log("value: 10");
// } else {
//     console.log("value is not 10!");
// };

// if (value !== 10) {
//     console.log("value: 10");
// } else {
//     console.log("value is not 10!");
// };

// value = false;

// if (value) { // Проверка на наличие существования переменной value
//     console.log("some actions");
// } else { // Это действие сработает если переменная value равна null, undefined, 0, false, "", NaN
//     console.log("else actions");
// };

/* --- ! - логический оператор "Не" --- */

// value = null;

// console.log(!value); // Оператор ! преорбразует значение переменной в противоположный ему булевое значение P.S: или это можно прочесть как этой переменной не существует
// console.log(!!value); // Оператор !! преорбразует значение переменной в булевое значение P.S: это аналогично преобразованию Boolean()

// if (!value) { 
//     console.log("Переменной value не существует!")
// }

// value = []; // Пустой массив в булевом значении это true
// value = ["string in array"];

// if (value.length) { // false если массив пустой
//     console.log(value);
// } else {
//     console.log("array is empty");
// };

// if (Array.isArray(value)) { // Проверка на наличие массива
//     console.log("Массив правдив");
// } else {
//     console.log("Массива не существует");
// };

// let user = {
//     name: "John"
// };

// if (name) { //ошибка потому что такой переменной нет
//     console.log(user.name);
// } else {
//     console.log("name is not defined");
// };

// if (user.name) {
//     console.log(user.name);
// } else {
//     console.log("error");
// };

// if (user.hasOwnProperty("name")) { // проверка на наличие свойтства name у объекта user P.S: не проверяет значение этого свойтсва
//     console.log(user.name);
// } else {
//     console.log("error");
// };

/* --- || оператор "или" --- */
// Оператор "или" запинается на true
// value = 1 || 0;
// value = 0 || 2;
// value = 0 || 0 || 3;
// value = 0 || null ||undefined || "" || false || NaN; // если все операнды преобразуются в false то оператор "или" выберет самый последний из них
// console.log(value);

// let age = 18;

// if (age < 20 || age > 60) {
//     console.log("some actions");
// } else {
//     console.log("else actions");
// };

// пример с заполнением никнейма
// let serverNickname = "John";
// let serverNickname = "";
// let nickname = serverNickname || "default nickname";

// console.log(nickname);

/* --- && оператор "и" --- */
// оператор "и" запинается на false

// value = 1 && 0;
// value = 0 && 2;
// value = 5 && "";
// value = 3 && "full string";
// value = 5 && "some string" && true && null && false;

// console.log(value);

// пример с ценой 
// let productPrice = 10;

// if (productPrice >=5 && productPrice <= 20) {
//     console.log("беру");
// } else {
//     console.log("Это мне не подходит");
// };

// Несколько условий/ветвлений 
// value = 10;

// if (value < 10) {
//     console.log("value < 10", value);
// } else if (value >= 10) {
//     console.log("value >= 10", value);
// } else {
//     console.log("else actions");
// };