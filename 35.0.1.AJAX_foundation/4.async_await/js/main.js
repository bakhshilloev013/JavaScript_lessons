"use strict";

const delay = ms => { 
    return new Promise(r => setTimeout(() => r(), ms));
};

let url = "https://jsonplaceholder.typicode.com/todos";

//* Without async
// function fetchTodos() {
//     console.log("Fetch todos started...")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => console.log("Data:", data))
//     .catch(err => console.error(err));


//* With async
async function fetchAsyncTodos() {
    console.log("Fetch todos started...");
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data:", data);
    } catch (e) {
        console.error(e)
    }
    
    
}

fetchAsyncTodos();