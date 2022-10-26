'use strict';

class Rectangle {
    constructor(height, width) { // constructor эта свойство внутри классов
        this.height = height;
        this.width = width;
    } // Внутри классов нельзя прописывать знак ";"
    
    calcArea() { // метод для нашего будущего объекта
        return this.height * this.width;
    }
};

// const square = new Rectangle(10, 22);
// const square2 = new Rectangle(20, 30);
// console.log(square.calcArea());
// console.log(square2.calcArea());

/* --- Наследование классов от друг-друга --- */
/**
 * Наследование производится когда создаётся новый класс. Там прописывают наследование от конкретного класса с помощью команды extends
 * Конструкторы в классах наследуются от друг-друга только в том случае если наследование прописано. Конструкторы наследуются с помощью команды super() 
 * Методы в классах наследуются с помощью extends
 */

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

// const div = new ColoredRectangleWithText(15, 20, "Hello world!", 'purple');div.showMyProps();
// console.log(div.calcArea());