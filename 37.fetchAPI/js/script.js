"use strict";
// API - application programmic interface / интерфейс программного обеспечения
// например document из дом дерева/контента тоже входит в DOM API
// fetch - API для общения/взаимодействия с сервером. Он построен на промисах
// ! для взаимодействия с сервером нужен url сервера (например фейковый JSON объект или PHP)
// url на фейковый JSON сервер: https://jsonplaceholder.typicode.com
// как выглядит fetch 
/* fetch( 1 - url, 2 - настройки в виде объекта ).then(продолжительность как у промисах) */
/* --- Fetch - API --- */
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ name: "Alex" }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())  // метод json превращает json объект в promise которого можно then-ить или catch-нуть и возвращает(return) в эту же строку для дальнейшего взаимодействия
        .then(json => console.log(json));
