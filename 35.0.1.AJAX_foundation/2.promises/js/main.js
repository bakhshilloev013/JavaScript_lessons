"use strict";

console.log("Отправка данных...")

// setTimeout(() => {
//     console.log("Обработка данных ждите...");

//     let backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working",
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("Данные получены: ", backendData);
//     }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Обработка данных ждите...");
//         let backendData = {
//           server: "aws",
//           port: 2000,
//           status: "working",
//         };

//          resolve(backendData);
//     }, 2000);
// });

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//             // reject(data); // в этом случае вместо then работает catch
//         }, 2000);
//     });
// }).then(data => {
//     console.log("Данные получены:", data);
//     data.fromPromise = true;
//     return data;
// }).then(data => {
//     console.log("Модифицированный:", data);
// }).catch(err => { // работает когда информация передана через reject
//     console.error("Error:", err);
// }).finally(() => {
//     console.log("Финальный результат.")
// });


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

// sleep(2000).then(() => { console.log("After 2 seconds") });
// sleep(5000).then(() => { console.log("Afrer 5 seconds") });


Promise.all([sleep(2000), sleep(3000)]).then(() => {
    console.log("sleep last")
});

Promise.race([sleep(2000), sleep(3000)]).then(() => {
    console.log("sleep first")
});