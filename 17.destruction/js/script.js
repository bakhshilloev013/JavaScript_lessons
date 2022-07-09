'use script';
/* --- Деструктуризация объектов --- */
const user = {
    firstName: 'John',
    lastName: 'Shelby',
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// console.log(firstName, lastName);

// Для деструктуризации объекта обертываем его свойства в фигурные скобки и связываем его с объектом деструктуризации
// const {firstName, lastName, age = 34} = user;
// console.log(firstName, lastName);

// //user.age = 22;

// const {firstName, lastName, age = 34} = user;
// console.log(firstName, lastName, age);

// const {firstName: name, lastName, age: years = 34} = user; //Деструктуримые свойства можно называть как удобно, для этого сначала нужно написать само свойство и присвоить ей новое имя
// console.log(name, lastName, years);

// user.info = {
//     skills: ['html', 'css', 'js'],
//     work: 'iCode',
// };

// const {info} = user;
// console.log(info);

// const {info: {skills, work}} = user;
// console.log(skills, work);

/* --- Деструктуризация массивов --- */
// Для деструктуризации массива как удобно(осмысленно) именуя её элементы обертываем их в четырёхугольные скобки и связываем его с массивом деструктуризации
// const colors = ['white', 'green', 'blue', 'red'];
// const [w, g, b, r] = colors;
// console.log(w, g, b, r);

// const [w, g, b, r, purple = 'purple'] = colors;
// console.log(purple);

// const [, , , r] = colors; // Таким образом можно пропускать элементы массива. Точнее необязательно вызывать их один за другим чтобы получить какой-то конкретный элемент
// console.log(r);

// const names = ['John', 'Thomas', 'Arthur', 'Franklin'];
// const [name1, name2, name3, name4] = names;
// const [name1, , , name4] = names;
// console.log(name1, name4);

// const arrInArray = ['first element', ['key of obj', 'value of obj']]; 
// const [, [key, value]] = arrInArray; // Деструктуризация массива в массиве происходит как и с объектом в объекте
// console.log(key, value);

// const [name1, ...otherNames] = names; // Деструктурирует первый элемент а остальные элементы деструтурирует в единый массив
// console.log(name1, otherNames);

// const [...newNames] = names; // Копирование элементов массива в новую переменную(newNames)
// console.log(newNames);
// console.log(newNames === names); // false

// const newNames = [...names]; // Аналогично верхнему копированию
// console.log(newNames);
// console.log(...newNames); // Вывести элементы массива не в массиве, а как через запятыме в console.log 

// const colorsNames = [...colors, ...names]; // Копирование элементов двух массивов в один единый массив
// const colorsNames = ['some items', ...colors, ...names]; 
// console.log(colorsNames);

// const newUser = {...user}; // Копирование свойств объекта в другой объект
// console.log(newUser); 
// console.log(newUser === user); // false 
// console.log(newUser.info === user.info); // true потому что это не глубокое копирование 

// const {
//     info: {
//         skills: [h, c, j],
//     },
// } = newUser;
// console.log(h, c, j);

// Копирование элементов arguments в нопый массив с помощью деструктуризации arguments
// function foo(x, y, ...others) {
//     console.log(arguments);
//     const [...args] = arguments;
//     console.log(args);
//     console.log(others);
//     console.log(args === arguments); // false
// };
// foo(11, 22, 56, 78);

// const numbers = [2, 7];

// function foo2(x, y) {
//     console.log(x, y);
// };

// foo2(numbers[0], numbers[1]);
// foo2(...numbers);
