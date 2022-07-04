'use strict';
/**
 * forEach
 * filter
 * map
 * reduce
 * some/every
 * sort
 * find
 */

const users = [
    {
        _id: '5cde6ce338171bb473d2855',
        index: 0,
        isActive: false,
        balance: 6953.64,
        age: 29,
        name: 'Thomas Shelby',
        gender: 'male',
        company: 'Shelby Company',
        email: 'thomasshelby@mail.com',
        phone: '+1 (977) 522-33-78',
        registered: '2015-02-14T11:45:27 -02:00'
    },
    {
        _id: '5cde6ce0db765gh42ue14786',
        index: 1,
        isActive: true,
        balance: 8706.31,
        age: 25,
        name: 'Amanda Desanta',
        gender: 'female',
        company: 'CherryVine',
        email: 'amandadesanta@mail.com',
        phone: '+1 (977) 700-31-98',
        registered: '2018-05-27T20:38:11 -03:00'
    },
    {
        _id: '5cde6ce760241ef682t1631',
        index: 2,
        isActive: false,
        balance: 3457.65,
        age: 33,
        name: 'Edward Morra',
        gender: 'male',
        company: 'Dedsec',
        email: 'edwardmorra@mail.com',
        phone: '+1 (977) 431-25-79',
        registered: '2012-07-10T13:15:44 -03:00'
    },
    {
        _id: '5cde6ce134758ed69da1361',
        index: 3,
        isActive: true,
        balance: 1578.98,
        age: 22,
        name: 'John Snow',
        gender: 'male',
        company: 'Winterfell',
        email: 'johnsnow@mail.com',
        phone: '+1 (977) 789-84-57',
        registered: '2019-01-15T10:33:45 -03:00'
    }
];

/* --- forEach --- */
// users.forEach((item, index, array) => { // Этот метод перебирает элементы массива по: элементу, индексу и массиву
    // console.log(`item of array: ${item},
    // index of item: ${index},
    // item of arr: ${array}`);
//    // console.log(item, index, array);
// });


/* --- filter --- */ 
// const userOlder30 = users.filter((item, index, array) => item.age > 30); // Этот метод по указанному выражению переберёт элементы массива по: элементу, индексу, масииву и добавит их в новый массив
// console.log(userOlder30);
// const userLess30 = users.filter(item => item.age < 30); 
// console.log(userLess30);
// const activeUsers = users.filter(item => item.isActive === true);
// console.log(activeUsers);

/* --- Map --- */
// const usersNames = users.map(item => item.name); // Переберёт из элементов массива указанные свойства в новый массив 
// const usersNames = users.map(item => ({name: item.name, age: item.age}));
// console.log(usersNames);

/* --- Reduce --- */
// const totalBalance = users.reduce((acc, item, index, array) => { // У метода 2 аргумента: 1)колбек, 2)стартовое значение. У колбека 4 аргумента 1)аргумент это значение прежднего перебора 2,3,4 это элекмент, индекс, массив
//     console.log(acc);
//     acc += item.balance;
//     return acc;
// }, 0);
// console.log(totalBalance);
// const usersObj = users.reduce((acc, item) => {
//     acc[item._id] = item;
//     return acc;
// }, {});
// console.log(usersObj);

/* --- some/every --- */
// const isFemale = users.some((item, index, array) => item.gender === 'female'); //Метод проверяет указанное свойство и возвращает булевое значение
// console.log(isFemale);
// const isAllFemale = users.every((item, index, array) => item.gender === 'female');
// console.log(isAllFemale);
// const isAll = users.every(item => item.age > 18);
// console.log(isAll);

/* --- find --- */
// const user = users.find(item => item.name === 'Amanda Desanta'); // Переберёт элемент по указанному свойству
// console.log(user);

/* --- sort --- */
// const strArr = ['John', 'Henry', 'Bill', 'Amanda']; 
// strArr.sort(); // Изменяет исходный массив, изменяет по строчному алфавиту
// console.log(strArr);
// const numbersArr = [10, 15, 13, 27, 7, 33];
// numbersArr.sort();
// numbersArr.sort((prev, next) => prev - next);
// console.log(numbersArr);
// users.sort((prevItem, nextItem) => prevItem.age - nextItem.age);
// console.log(users);