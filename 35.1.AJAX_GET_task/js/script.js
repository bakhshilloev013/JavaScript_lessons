'use strict';

const getBtn = document.querySelector(".getBtn"),
      addBtn = document.querySelector(".addBtn"),
      posts = document.querySelector(".posts");
let i = 1;
getBtn.addEventListener("click", requestPosts);
addBtn.addEventListener("click", addPosts);

function requestPosts(e) {
    e.preventDefault();
    const { target } = e;
    if (i > 100) i = 1;

    const xml = new XMLHttpRequest();
    xml.open("GET", `https://jsonplaceholder.typicode.com/posts/${i++}`);

    xml.addEventListener("load", () => {
        const req = JSON.parse(xml.responseText);
        renderPosts(req);
    });

    xml.send();
};

function renderPosts(post) {
    const fragment = document.createDocumentFragment();
    
        const item = document.createElement("div");
        item.classList.add("card", "text-bg-light", "col-4");
        item.innerHTML = `
            <div class="card-header">${post.title}</div>
            <div class="card-body">
                <p class="card-text">${post.body}</p>
            </div>
        `;
        fragment.append(item);
    
    posts.append(fragment);
};

function createPosts(body, cb) {
    const xml = new XMLHttpRequest();
    xml.open("POST", `https://jsonplaceholder.typicode.com/posts`);

    xml.addEventListener("load", () => {
        const req = JSON.parse(xml.responseText);
        cb(req);
    });

    xml.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xml.send(JSON.stringify(body));
};

function addPosts() {
    const item = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    createPosts(item, (response) => {
        console.log(response);
    })
};