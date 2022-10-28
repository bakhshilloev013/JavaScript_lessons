"use strict";
/* --- Функции конструкторы --- */

// let num = new Number(1); // Устаревший вид функции конструктора номеров
// let number = new Function(1); // Устаревший вид объявления новых функций

// Вспоминаем что функции тоже такого рода объекты которым можно объявлять, добавлять методы и свойства
function User(name, id) {
    this.name = name; // С помощью this мы будем добавлять свойства в функцию и выводить их при вызове
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}; // Создали функцию конструктора объектов с помощью которого мы можем создавать новых пользователей у которых будет свойства name, id и общий для всех human

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

User.prototype.exit = function () { // Добавлять в прототип конструктора новые методы P.S: exit это не команда. Вы можете написать вместо неё что угодно
    console.log(`User ${this.name} leaves`);
};

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

