"use strict";
const form = document.forms['form'],
      input = form.querySelector("input"),
      btn = form.querySelector("button");


// let requestUrl = "https://jsonplaceholder.typicode.com/users"; // GET
let requestUrl = "https://jsonplaceholder.typicode.com/posts"; // POST

/* Without function */
// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.responseType = "json";

// xhr.addEventListener("load", e => {
//     if (xhr.status >= 400) {
//         console.error(xhr.status, xhr.response);
//     } else {
//         console.log(xhr.response);
//     }
// });

// xhr.addEventListener("error", e => {
//     console.log(xhr.status, xhr.statusText);
//     console.log(xhr.response);
// })

// xhr.send();

/* GET */
// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = "json";

//         xhr.addEventListener("load", (e) => {
//           if (xhr.status >= 400) {
//            reject(xhr);
//           } else {
//            resolve(xhr.response);
//           }
//         });

//         xhr.addEventListener("error", (e) => {
//           reject(xhr);
//         });

//         xhr.send();
//     })
// }

/* GET */
// sendRequest("GET", requestUrl)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.status, err.statusText);
//     })

/* POST */
function sendRequest(method, url, body=null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", (e) => {
      if (xhr.status >= 400) {
        reject(xhr);
      } else {
        resolve(xhr.response);
      }
    });

    xhr.addEventListener("error", (e) => {
      reject(xhr);
    });

    xhr.send(JSON.stringify(body));
  });
}

/* Тело запроса */
const body = {
    name: "Thomas",
    age: 26
}
/* POST */
sendRequest("POST", requestUrl, body)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.status, err.statusText);
  });