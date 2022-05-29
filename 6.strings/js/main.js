"use strict";

/* --- String methods --- */
const firstName = "Thomas",
      lastName = "Shelby",
      age = 22,
      str = "Hello my name is Thomas";

let value;

// value = firstName + lastName; // Складываение строк называется - Конкатенация
// value = firstName + " " + lastName; // Выведет строки с пробелом между ними
// value = value + " i am " + age; // Выведет прошлое значение value и добавит к ним строку с числом из переменной age
// value += " i am " + age; // Аналогично тому что мы написали сверху

// value = firstName.length; // Выведет число символов в строке (длину строки) P.S: счёт начинается с 0
// value = firstName[2]; // Выведет букву o так как она стоит на втором индексе

// value = lastName[lastName.length -1]; // Выведет последний символ из этой строки

// /* --- Methods --- */
// value = firstName.toUpperCase(); // Выведет значение переменной с буквами в верхнем регистре
// value = firstName.toLowerCase(); // Выведет значение переменной с буквами в маленьком регистре
// value = firstName.concat(" ", lastName); // Складывает переменной firstName переменную lastName через указанный нами пробел

// value = firstName.indexOf("o"); // Укажет индекс буквы "o" в переменной firstName 
// value = str.indexOf("my");
// value = str.indexOf("m", 11); // Поиск инкеска данной буквы начнётся с 11 го индекса

// value = str.includes("my"); // Проверяет есть ли в этой переменной строка которая мы ищем и выдаст булевое значение
// value = str.includes("my", 11); // Поиск начинается с индекса которую мы указали

// value = str.slice(0, 5); // Вырежет из строки определённую часть начиная с 0 го индекса до пятого, не включая последний. Пример: Если написать от 0 го индекса до 4 го, тогда выдаст строку Hell
// value = str.slice(); // Если оставить пустую то выдаст всю строку
// value = str.slice(5); // Если написать только начало то вырежет всю строку начиная с этого инкеса

// value = str.replace("Thomas", "John"); // Найдет из этой переменной строку Thomas и заменит и её на John

console.log(value);