"use strict";
let value;

// Number to string
value = String(10); // покажет строку 10
value = String(10+40); // покажет строку 50
value = (40).toString(); // из числа 40 преобразит строку 40

// Boolean to string
value = String(false); // покажет строку false
// Array to string
value = String([1, 2, 3]); // покажет строку 1,2,3 
// Object to string
value = String({ name: 'Denis' }); //покажет строку object: Object

value = 30 + '' + undefined; // покажет строку 30undefined
value = 30 * '5'; // покажет число 150
value = false + undefined; // покажет число NaN

// String to number
value = Number('23'); // покажет число 23
value = Number(false); // покажет число 0
value = Number(null); // покажет число 0
value = Number('false'); // покажет число Nan
value = Number([1,2,3]); // покажет число 1,2,3

value = parseInt('200px'); // покажет число 200, но если перед числом поставить буквы тогда покажет Nan
value = parseFloat('200.212px'); // покажет дробное число 200,212

// Boolean
value = Boolean('hello'); // покажет true 
value = Boolean(''); // покажет false
value = Boolean(-100); // покажет true
value = Boolean(0); // покажет false
value = Boolean(undefined); // покажет false
value = Boolean(null); // покажет false
value = Boolean({}); // покажет true
value = Boolean([]); // покажет true

console.log(value);
console.log(typeof value);