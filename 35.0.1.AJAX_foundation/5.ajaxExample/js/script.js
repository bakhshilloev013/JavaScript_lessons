"use strict";
window.addEventListener("DOMContentLoaded", () => {
  function req() {
    //* XML
      /*
        const request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/people");
        request.setRequestHeader(
          "Content-type",
          "application/json: charset=utf-8"
        );
        request.send();
        request.addEventListener("load", function () {
          if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            createCards(data);
            
          } else {
            console.error("Что-то пошло нек так...", request.status);
          }
        });
      */
    
    //* Fetch with promises
      getResource("http://localhost:3000/people")
        .then((data) => createCards(data))
        .catch((err) => console.error("Что-то пошло нек так...", err));

      this.remove();
    };

  function createCards(data) {
    data.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let icon;
      if (item.sex === "male") {
        icon = "icons/mars.png";
      } else {
        icon = "icons/female.png";
      }

      card.innerHTML = `
                    <img src=${item.photo} alt="photo">
                    <div class="name">${item.name} ${item.surname}</div>
                    <div class="sex">
                        <img src="${icon}" alt="${item.sex}">
                    </div>
                `;

      document.querySelector(".app").append(card);
    });
  }
  
  async function getResource(url) {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  document.querySelector("button").addEventListener("click", req, {"once": true});
    
});