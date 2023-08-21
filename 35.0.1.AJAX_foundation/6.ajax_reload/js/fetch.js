let requestUrl = "https://jsonplaceholder.typicode.com/users";

/* GET */
// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//         // return response.text();
//         return response.json();
//     })
// }

/* GET */
// sendRequest("GET", requestUrl)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

/* POST */
function sendRequest(method, url, body = null) {
    const headers = {
        "Content-Type": "application/json"
    }
    const configuration = {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }
    return fetch(url, configuration)
        .then(response => {
            // return response.text();
            return response.json();
        });
}

const body = {
  name: "Shelby",
  age: 22,
};

/* POST */
sendRequest("POST", requestUrl, body)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });