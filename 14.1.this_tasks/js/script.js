'use strict';
/* 
    1)  Создать объект, который описывает ширину и высоту
        прямоугольника, а также может посчитать площадь фигуры:
        const rectangle = {width:..., height:..., getSquare:...};

    2)  Создать объект, у которого будет цена товара и его скидка, а также
        два метода: для получения цены и для расчета цены с учетом скидки:
        const price = {
            price: 10,
            discount: '15%',
        ... };
        price.getPrice(); // 10
        price.getPriceWithDiscount(); // 8.5

    3)  Создать объект, у которого будет поле высота и метод “увеличить
        высоту на один”. Метод должен возвращать новую высоту:
        object.height = 10;
        object.inc(); // придумать свое название для метода
        object.height; // 11;

    4)  Создать объект “вычислитель”, у которого есть числовое свойство
        “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
        Методы можно вызывать через точку, образуя цепочку методов:
        const numerator = {
            value: 1,
            double: function () {...},
            plusOne: function () {...},
            minusOne: function () {...},
        }
        numerator.double().plusOne().plusOne().minusOne();
        numerator.value // 3
*/

/* --- Task - 1 --- */
// function getSquare() {
//     return this.height * this.width;
// };
// function getHeight() {
//     return this.height;
// };
// function getWidth() {
//     return this.width;
// };

// const rectangle = {
//     width: 150,
//     height: 20,
//     getSquare,
//     getHeight,
//     getWidth,
// };

// const result = rectangle.getHeight();
// const result = rectangle.getWidth();
// const result = rectangle.getSquare();
// console.log(result);

/* --- Task - 2 --- */
// function getPrice() {
//     return this.price;
// };
// function getPriceWithDiscount() {
//     let price = this.price,
//         discount = parseInt(this.discount),
//         percent = (price * discount) / 100;

//     return price - percent;
// };

// const product = {
//     price: 10,
//     discount: '15%',
//     getPrice,
//     getPriceWithDiscount,
// };

// const result = product.getPrice();
// const result = product.getPriceWithDiscount();
// console.log(result);

/* --- Task - 3 --- */
// const item = {
//     height: 15,
//     increaseOne() {
//         this.height += 1;
//     },
// };

// console.log(item.height);
// item.increaseOne();
// console.log(item.height);

/* --- Task - 4 --- */
// function plusOne() {
//     this.value = ++this.value;
// };
// function minusOne() {
//     this.value = --this.value;
// };
// function double() {
//     this.value = this.value*2;
// };

// const numerator = {
//     value: 5,
//     double,
//     plusOne,
//     minusOne,
// };

// numerator.plusOne();
// numerator.minusOne();
// numerator.double();
// console.log(numerator.value);

/* 
    1)  Создать объект с розничной ценой и количеством продуктов. Этот
        объект должен содержать метод для получения общей стоимости
        всех товаров (цена * количество продуктов)

    2)  Создать объект из предыдущей задачи. Создать второй объект,
        который описывает количество деталей и цену за одну деталь. Для
        второго объекта нужно узнать общую стоимость всех деталей, но
        нельзя создавать новые функции и методы. Для этого
        “позаимствуйте” метод из предыдущего объекта.

    3)  Даны объект и функция:
        let sizes = {width: 5, height: 10},
        getSquare = function () {return this.width * this.height};
        Не изменяя функцию или объект, получить результат функции
        getSquare для объекта sizes
    
    4)  let element = {
        height: 25,
        getHeight: function () {return this.height;}
        };

        let getElementHeight = element.getHeight;
        getElementHeight(); // undefined

        Измените функцию getElementHeight таким образом, чтобы можно
        было вызвать getElementHeight() и получить 25.
*/

/* --- Task - 1 --- */
// function allPrice() {
//     return this.price * this.amount;
// };

// const products = {
//     price: 15,
//     amount: 22,
//     // allPrice() {return this.price * this.amount},
//     allPrice,
// };

// console.log(products.allPrice());

/* --- Task - 2 --- */
// const items = {
//     price: 10,
//     amount: 13,
//     priceOfAllItems: products.allPrice,
// };

// console.log(items.priceOfAllItems());

/* --- Task - 3 --- */
// let sizes = {width: 5, height: 10},
//     getSquare = function () {return this.width * this.height};

// sizes.getSquare = getSquare;
// console.log(sizes.getSquare());

/* --- Task - 4 --- */
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
//     };

//     let getElementHeight = element.getHeight;
//     let getElementHeight = element.getHeight.bind(element); // bind() создаёт новую функцию, которая при вызове устанавливает
// в качестве контекста выполнения this предоставленное значение
//     getElementHeight(); // undefined