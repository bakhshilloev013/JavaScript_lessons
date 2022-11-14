'use strict';

const apiUrl = "https://jsonplaceholder.typicode.com",
  form = document.querySelector("form"),
  name = document.querySelector(".name"),
  email = document.querySelector(".email"),
  username = document.querySelector(".username"),
  website = document.querySelector(".website"),
  phone = document.querySelector(".phone"),
  btn = document.querySelector("button"),
  wrapper = document.querySelector(".users-info");
      
form.addEventListener("submit", onSend);

function onSend(e) {
    e.preventDefault();
    const userInfo = {
        name: name.value,
        email: email.value,
        username: username.value,
        website: website.value,
        phone: phone.value
    };
    console.log(name.value);
    
    postRequest(userInfo);
    form.reset();
}

function postRequest(body) {
    const xml = new XMLHttpRequest();
    xml.open("POST", `${apiUrl}/posts`);

    xml.addEventListener("load", () => {
        const res = JSON.parse(xml.responseText);
        renderPost(res);
    });
    xml.setRequestHeader("Content-type", 'application/json; charset=utf-8');

    xml.send(JSON.stringify(body));
}

function renderPost(obj) {
    const fragment = document.createDocumentFragment();
    const item = document.createElement("div");
    item.classList.add("card", "col-5");
    item.innerHTML = `
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${obj.name}</li>
            <li class="list-group-item">Username: ${obj.username}</li>
            <li class="list-group-item">Site: ${obj.website}</li>
            <li class="list-group-item">Email: ${obj.email}</li>
        </ul>
        <div class="card-footer">
            Phone: ${obj.phone}
        </div>     
    `;
    fragment.append(item);
    wrapper.append(fragment);
};