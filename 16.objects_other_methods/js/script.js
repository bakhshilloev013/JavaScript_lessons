'use script';
/* --- Other methods of objects --- */
let obj1 = {
    name: 'John',
};

let obj2 = {
    age: 22,
};

// let newObj = obj1; // Создаётся ссылка на obj1 но не копирование
// let newObj = Object.assign({}, obj1);
// console.log(newObj);
// console.log(newObj === obj1);

// let newObj = Object.assign({}, obj1, obj2); // В пустой объект копируются свойства из двух объектов
// console.log(newObj);

// obj2.name = 'Thomas';
// let newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);

/* --- Глубокое копирование --- */
// obj1.info = {
//     skills: ['html', 'css', 'Js']
// };

// let newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);
// console.log(newObj.info === obj1.info); // Выведет true потому что вложенный не копируется а передаётся через ссылку

/* --- JSON --- */
// console.log(JSON.stringify(obj1));
// let objJson = JSON.stringify(obj1);
// newObj = JSON.parse(objJson);
// // newObj = JSON.parse(JSON.stringify(obj1)); // Короткий метод 
// console.log(newObj);
// console.log(newObj.info === obj1.info); // false

// obj1.age = 20;
// let keys = Object.keys(obj1); // Создаст массив с ключами из объекта obj1
// console.log(keys); // Выведет массив с ключами из объекта obj1
// let values = Object.values(obj1); // Создаст массив с Значениям из объекта obj1
// console.log(values); // Выдаёт массив с Значениям из объекта obj1
// let entries = Object.entries(obj1); // Создаст в массиве массивы с парами ключ - значение из объекта obj1
// console.log(entries);
// let fromEntries = Object.fromEntries([['firstKey', 'value1'], ['secondKey', 'value2']]); // Создаст объект из массива массивов с парами ключ - значение
// console.log(fromEntries);