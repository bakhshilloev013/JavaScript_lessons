"use strict";

// const animal = {
//     name: "Animal",
//     age: 4,
//     hasTail: true
// };


// class Animal {
//   static type = "ANIMAL"; // Статическая переменная для класса

//   constructor(options) { // options - Не принципиальное имя, но в этой переменной будут лежать все значения получаемые от будущего объекта
//     this.name = options.name;
//     this.age = options.name;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     // метод для будущего объекта
//     console.log("I am Animal!");
//   }
// }

// // const animal = new Animal({
// //     name: "Animal",
// //     age: 4,
// //     hasTail: true
// // });


// class Cat extends Animal { // создаём новый класс который наследует всё от Animal
//     static type = "CAT";

//     constructor(options) { // вносим дополнительные или изменям существующие свойства будущего объекта
//         super(options); // с помощью команды super - вызываем родительский конструктор(Animal) и передаём в него значения которые получим от будущего объекта
//         this.color = options.color;
//     }

//     voice() { // если создать метод уже с существующим именем то новый заменяет старый
//         super.voice(); // с помощью этой команды мы вызвали и родительский метод тоже теперь когда мы обратимся к этому методу сработают и родительский и новый метод
//         console.log("I am a cat!");
//     }
// }

// const cat = new Cat({
//     name: "Cat",
//     age: 3,
//     hasTail: true,
//     color: "black"
// });

// * Пример на практике

class Component{
    constructor(selector) {
        this.el = document.querySelector(selector);
    }

    hide() {
        this.el.style.display = "none";
    }
    show() {
        this.el.style.display = "block";
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.el.style.height = this.el.style.width = options.size + "px";
        this.el.style.background = options.color;

    }
}

class Circle extends Box{
    constructor(options) {
        super(options);

        this.el.style.borderRadius = 100 + "%";
    }
}


const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red"
})

const box2 = new Box({
    selector: "#box2",
    size: 120,
    color: "blue"
})

const circle = new Circle({
    selector: "#circle",
    size: 90,
    color: "green"
})