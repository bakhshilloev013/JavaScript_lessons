"use strict";
/* --- Functions --- */
/**
 * Виды вункций:
 *  Стрелочные функции
 *  Колбек функции
 * Функции как методы
 * 
 * Способы объявления функций:
 *  function declaration
 *  function expresstion
 */

/* --- function declaration --- */
// function nameOfFunction(parametrs) { // Объявление функции, наименование функци, параметры функции
//     bodyOfFunction // Тело фнукции где выполняются действия
//     console.log("actions in bodyOfFunction") 
// };

// function sayHello() { // Объявление функции, наименование функци, параметры функции
//     console.log("Hello world!"); // Тело фнукции где выполняются действия
// };

// sayHello(); // Вызов функций - без этой комманды функция не сработает P.S: вызов можно воспроизвести до самой функции

// function nameOfUser(firstName, lastName) {  // Объявление функции, наименование функци, параметры функции
//     console.log(firstName + ' ' + lastName); // Действия в теле функции, работа с параметрами
// };

// nameOfUser("Bekhzod", "Bakhshilloev"); // Вызов функции с значениями её параметров P.S: Функцию можно вызвать несколько раз

/* --- Return --- */
// function foo(param) {
//     console.log("Hello " + param);
// };

// const result = foo("World");
// console.log(result); // Выведет undefined потому что функция ничего не возвращает


// function foo(param) {
//     return "Hello " + param; // С помощью команды return функция возвращает результат выполненных ею действий в переменную в которой она состоит
// };

// const result = foo("World");
// console.log(result); // Выведит Hello World потому что функция вернула в переменную значение 

/**
 * Return команд может быть несколько
 * После команды return работа функции прекращается P.S: нельзя писать другие действия после команды return
 */

// function test(firstName, lastName) {
//     if (!lastName) { // Проверка на наличие второго параметра
//         return console.error("Error!");
//     }

    // if (!lastName) return console.error("Error!");
// };

// const result = test("Michael");
// console.log(result);

/* --- Области видимости --- */
/**
 * глобально
 * локально
 */

let x = 10;

// function num() {
//     x = 5; // ищет объявление переменной x внутри этой функции, не находит ищет в параметрах, не находит в параметрах тоже и выходит за рамки функции в глобальное пространство
//     console.log(x); // Выводит 5
// };

// num(); // Вызывает функцию P.S: До сих пор JS её не прочла
// console.log(x); // Выводит 5 так как внутри функции значение переменной x было изменено

// function num() {
//     let x = 13; // Объявление переменной внутри функции она будет видна только внутри функции точнее мы не можем найти её в глобальном пространстве потому что она локальна
//     console.log(x);
// };

// num();
// console.log(x);


// let user = {
//     name: "John",
//     age: 22
// };

// function changeObj(obj) {
//     obj.name = "Snow"; // Изменение свойства объекта которую получили через параметр
// };

// changeObj(user); // Вызов функции в параметре передаём объект
// console.log(user);

/* --- function expresstion --- */

// const multiplyNumber = function(num) { // Функция присваевается переменной, единственное отличие данной функции от других способов объявления функций - это то что её нельзя вызвать до объявления этой переменной
    // console.log(num * num);
    // return num * num;
// };

// multiplyNumber(5);
// let result = multiplyNumber(5);
// console.log(result);

/* --- Самовызывающиеся функции --- */
// (function (num) { // У функции нет имени 
//      console.log(num * num); // Есть тело
// })(5); // Самовызов выполняется в скобках

// (function (msg) { 
//     console.log(msg);
// })("Hello world!"); 


// 1)
// let num = 1;

// function multiply() {
//     if (arguments.length == 0) {
//         console.log("error");
//     } else {
//         for (let i = 0; i < arguments.length; i++) {
//             num *= arguments[i];
//         };
//     }
// };

// multiply();
// console.log(num);

// 2)
// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     };
//     return newStr;
// };

// const result = reverseString("test");
// console.log(result);

// 3)
// function getCodeStringFromText(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         newStr += str[i].charCodeAt() + " ";
//     }
//     return newStr;
// };

// console.log(getCodeStringFromText("hello"));

// 4)
// let ques = +prompt("Загадайте число", "");

// function randomNumber(numUser) {
//     let randomNum = Math.round(Math.random()*10);
//     if (numUser >= 1 && numUser <= 10) {
//         if (numUser == randomNum ) {
//             console.log("You win!");
//         } else {
//             console.log(`You loss, your number is ${numUser} random number is ${randomNum}`);
//         };
//     } else {
//         console.log("error");
//     }
// };

// randomNumber(ques);
