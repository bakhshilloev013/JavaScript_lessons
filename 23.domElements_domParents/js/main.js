// console.log(document.head); //вызывает дом элемент Head
// console.log(document.body); //вызывает дом элемент Body
// console.log(document.body.childNodes); //вызывает все ноды ( 1:и дом узлы; 2:и дом элементы) 
// console.log(document.body.firstChild); //вызывает первый дом узел внутри body
// console.log(document.body.lastChild); //вызывает последний дом узел внутри body
// console.log(document.body.firstElementChild); //вызывает первый дом элемент внутри body
// console.log(document.body.lastElementChild);  //вызывает последний дом элемент элемент внутри body

// console.log(document.querySelector("#current").parentNode); //вызывает родитель элемента (коем является дом элемент)
// console.log(document.querySelector("#current").parentElement); //вызывает родитель элемента, но только дом элемент родитель (коем точно будет являться дом элемент)
// console.log(document.querySelector("#current").parentNode.parentNode); //вызывает родитель элемента уровня выше (коем является дом элемент)

// console.log(document.querySelector("[data-current='3']").previousSibling) //вызывает предыдущий дом узел данного элемента
// console.log(document.querySelector("[data-current='3']").nextSibling) //вызывает сдедующий дом узел данного элемента

// console.log(document.querySelector("[data-current='3']").previousElementSibling) //вызывает предыдущий дом элемент данного элемента
// console.log(document.querySelector("[data-current='3']").nextElementSibling) //вызывает сдедующий дом элемент данного элемента

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //оставит(не переберёт) дом узел с свойством text
    }

    console.log(node); //переберёт отдельно каждый дом узел из псевдомассива childNodes
}