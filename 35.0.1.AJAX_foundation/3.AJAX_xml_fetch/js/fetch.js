"use strict";
const requestURL = "https://jsonplaceholder.typicode.com/users";

// * Метод GET
// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//         return response.json();
//     });
// };

// * Метод Post
function sendRequest(method, url, body = null) {
    let headers = {
        'Content-type': 'application/json'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json();
    });
};

// * Для метода GET
// sendRequest("GET", requestURL)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

let body = {
  name: "Osman",
  age: 22,
};

// * Для метода POST
sendRequest("POST", requestURL, body)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
