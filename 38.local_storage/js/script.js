"use strict";

// localStorage.setItem("key", "some value");

// localStorage.removeItem("key");
// localStorage.clear();

// console.log(localStorage.getItem("key"));


const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),
      changeBtn = document.querySelector(".change_btn");

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "lightskyblue";
};

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
});

changeBtn.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "lightskyblue";
    }
});