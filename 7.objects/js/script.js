"use strict";
/* --- Objects - Объекты --- */

// const user = {
//     name: "Bekhzod",
//     age: 22,
//     isAdmin: true,
//     email: "test@test.com",
//     "user-address": {
//         city: "Bukhara",
//         street: "Random street"
//     },
//     "is married": false,
//     skills: ["html", "css", "javascript"]
// };

// let value;
// let prop = "email";

// value = name; // Выдаст ошибку потому что свойство name невозможно получить таким образом, таким образом вызывают переменную
// value = user.name; // Правильный метод вызова свойства объекта
// value = user["isAdmin"]; //Ещё один способ для вызова свойств с специфическим/сложным наименованием
// value = user["is married"];
// value = user["user-address"];
// value = user["user-address"].city; // Вызов свойства объекта "user-address" вложенного в объекте "user" 
// value = user["user-address"]["street"]; // Ещё один способ вызова свойства объекта "user-address" вложенного в объекте "user"
// value = user["user-address"][city]; // Выдаст ошибку потому что свойство city роспознаётся как переменная 
// value = user[prop]; // В место переменной prop подставится её значение "email"

// user.name = "Bek"; // Изменили значение свойства "name" у объекта "user"
// user.info = "some info"; // Добавили в объект "user" новое свойство "info" и значение для неё
// user["user-address"]["country"] = "Uzbekistan"; // Создать новое свойство во вложенном объекте 
// user.plan.basic = "basic plans"; // Выдаст ошибку потому что мы обращаемся к не существующему вложенному объекту и изменить значение её свойства

// user.plan = {}; // Создали новое свойство и присвоили ей пустой объект 
// user.plan.basic = "basic plans"; // Задаём вложенному объекту новое свойство

// console.log(value);
// console.log(user);