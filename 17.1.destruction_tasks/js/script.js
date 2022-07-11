'use strict';
/*
    1)  Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект,     содержащий первый аргумент и массив из остатка:

    func(‘a’, ‘b’, ‘c’, ‘d’) → 
    {
    first: ‘a’,
    other: [‘b’, ‘c’, ‘d’]
    }

    2)  Организовать функцию getInfo, которая принимает объект вида
        { name: ...,  info: { employees: [...], partners: [ … ]  } }
        и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

        const organisation = {  
        name: 'Google',   
        info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
        };
        getInfo(organisation); → 
        Name: Google 
        Partners: Microsoft Facebook
*/

/* --- Task - 1 --- */
// function destruction() {
//     const [arg1, ...otherArgs] = arguments;
//     return {
//         first: arg1,
//         other: otherArgs,
//     };
// };

// const result = destruction('a', 'b', 'c', 'd');
// console.log(result);

/* --- Task - 2 --- */
// const organisation = {
//   name: "Google",
//   info: {
//     employees: ["Hatake", "Muhammed"],
//     partners: ["Microsoft", "Facebook", "Xing"],
//   },
// };

// function getInfo(obj) {
//     const {name, info: {employees, partners: [partner1, partner2, ...otherPartners]}} = obj;
//     return {
//         Name: name,
//         Partners: `${partner1} ${partner2}`,
//     };
// };
// const result = getInfo(organisation);
// console.log(result);