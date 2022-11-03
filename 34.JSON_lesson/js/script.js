'use strict';
/* JSON - Javascript object notation */

const person = {
    name: 'Alex',
    tel: '+998974526556',
    parents: {
        mom: {
            name: 'Isabel',
            age: 43
        },
        dad: {
            name: 'Mike',
            age: 44
        }
    }
}

// console.log(JSON.stringify(person)); // Обёртывает объект в читаемую строку, для передачи или ещё каких либо задач. Обёртываем с помощью JSON.stringify P.S: JSON возвращет объект в виде строки

// console.log(JSON.parse(JSON.stringify(person))); // Получает от сервера объект в виде строки и создаёт из неё настоящий объект P.S: Полученный объект это объект в виде строки которое когда-то было передано в сервер  с помощью JSON.stringify

const clone = JSON.parse(JSON.stringify(person));
// с помощью stringify мы переведём объект в строчный JSON вид, с помощью parse мы создаём из JSON строки новый клон объект никак не зависящий от своего оригинала
console.log(clone);
console.log(clone === person); // false

