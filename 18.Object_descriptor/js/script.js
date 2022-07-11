'use strict';
const car = {
    mark: 'BMW',
    year: 2018,
    //Расскоментировать в геттерах!
    // get age() {
    //     return `Машина выпущена в ${this.year} году`;
    // },
    //Расскоментировать в сеттерах!
    // set age(value) {
    //     this.year = value;
    // },
};

// Object.defineProperty(car, 'year', {
    // configurable: false, // Запретить конфигурацию для свойства year
    // enumerable: false, // Запретить перебор для свойства year
    //writable: false, //Запрещает изментять значение для свойства year
// });

// 1)
// car.year = 2019;
// console.log(car);
// delete car.year;

// 2)
// const keys = Object.keys(car);
// console.log(keys);
// for (let key in car) {
//     console.log(key);
//     console.log(car[key]);
// };

// 3)
// car.year = 2022;
// console.log(car);

/* --- Getters - Геттеры --- */
// Object.defineProperty(car, 'age', {
//     get: function() {
//         return `Машина выпущена в ${this.year} году`;
//     },
// });
// console.log(car.age);

/* --- Setters - сеттеры --- */
// Object.defineProperty(car, 'age', {
//     set: function(value) {
//         this.year = value;
//     },
// });
// car.age = 2020;
// console.log(car.age);