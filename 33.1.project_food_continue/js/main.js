'use strict';
document.addEventListener("DOMContentLoaded", () => {

    /* --- Tabs --- */
    const tabsWrapper = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabContents = document.querySelectorAll('.tabcontent');

    function hideTabContent(e) {
        tabContents.forEach((content, i) => {
            content.classList.remove('show', 'fade');
            content.classList.add('hide');
        })
        tabs.forEach((tab, i) => {
            tab.classList.remove("tabheader__item_active");
        })
    }


    function showTabContent(i=0) {
        tabContents[i].classList.remove('hide');
        tabContents[i].classList.add('fade', 'show');
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    //1)
    // tabs.forEach((tab, i) => {
    //     tab.addEventListener("click", () => {
    //         hideTabContent();
    //         showTabContent(i);
    //     })
    // })

    //2)
    tabsWrapper.addEventListener('click', e => {
        const { target } = e;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    /* --- Timer --- */
    const deadLine = '2022-09-30';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
            
            for (let key in t) {
                if (t[key]>= 0 && t[key] < 10) {
                    t[key] = `0${t[key]}`;
                };
            };

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        }
    }

    setClock('.timer', deadLine);

    /* --- Modal --- */
    const modalPage = document.querySelector(".modal"),
        modalClose = document.querySelector(".modal__close"),
        modalBtns = document.querySelectorAll('[data-modal]'),
        modalForm = modalPage.querySelector("form");
    
    // Вывод модального окана
    modalBtns.forEach(btn => {
        btn.addEventListener('click', showModal);
    });

    // Действия при отправке формы
    modalForm.addEventListener("submit", closeModal);

    // Действия при нажатии на закрытие
    modalClose.addEventListener('click', closeModal);

    // Действие при нажатии за границу модального окна(закрытие)
    modalPage.addEventListener("click", e => {
        const { target } = e;
        if (target === modalPage) {
            closeModal();
        };
    });
    
    // Функция закрытия
    function closeModal() {
        // modalPage.style.cssText = "display: flex";
        // modalPage.classList.remove("fade");
        // modalPage.classList.add("show");
        modalPage.classList.toggle("show");
        document.body.style.overflow = ""; // Возвращаем скролл страницы
        modalForm.reset();
    };

    // Функция открытия
    function showModal() {
        // modalPage.style.cssText = "display: flex";
        // modalPage.classList.remove("fade");
        // modalPage.classList.add("show");
        modalPage.classList.toggle("show");
        document.body.style.overflow = "hidden"; // Отменяем скролл страницы во время вывода модального
        clearInterval(modalTimerId);
    };

    // Закрытие при нажатие на ESC
    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            if (modalPage.classList.contains("show")) {
                closeModal();
            };
        };
    });

    /* --- Таймер модального окна --- */
    const modalTimerId = setTimeout(showModal, 3000);

    function showModalByScroll() {
        if ( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            showModal();
            window.removeEventListener("scroll", showModalByScroll); // Убираем событие 
          /*
                Здесь pageYOffset - это прокрученная высота,
                cliientHeight - это высота видимой части(экран),
                scrollHeight - это вся прокручиваемая высота сайта
            
            */
        }
    }

    window.addEventListener("scroll", showModalByScroll); 

    /* --- Конструктор карточек --- */
    /* --- My --- */
    // const cardsWrapper = document.querySelector(".menu__field"),
    //       cardsContainer = cardsWrapper.querySelector(".container");

    // class CardConstructor {
    //     constructor(src, title, text, num) {
    //         const fragment = document.createDocumentFragment();
    //         let card = document.createElement("div"),
    //             img = document.createElement("img"),
    //             h3 = document.createElement("h3"),
    //             descr = document.createElement("div"),
    //             divider = document.createElement("div"),
    //             price = document.createElement("div"),
    //             cost = document.createElement("div"),
    //             total = document.createElement("div");

    //         card.classList.add("menu__item");
    //         h3.classList.add("menu__item-subtitle");
    //         descr.classList.add("menu__item-descr");
    //         divider.classList.add("menu__item-divider");
    //         price.classList.add("menu__item-price");
    //         cost.classList.add("menu__item-cost");
    //         total.classList.add("menu__item-total");

    //         img.src = src;
    //         h3.textContent = `Меню "${title}"`;
    //         descr.textContent = text;
    //         cost.textContent = "Цена:";
    //         total.innerHTML = `<span>${num}</span> грн/день`;

    //         price.append(cost);
    //         price.append(total);
    //         card.append(img);
    //         card.append(h3);
    //         card.append(descr);
    //         card.append(divider);
    //         card.append(price);
    //         fragment.append(card);

    //         cardsContainer.append(fragment);
    //     }
    // }

    // const card1 = new CardConstructor(
    //     "img/tabs/vegy.jpg",
    //     "Фитнес",
    //     `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    //     "229"
    //   ),
    //   card2 = new CardConstructor(
    //     "img/tabs/elite.jpg",
    //     "Премиум",
    //     `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
    //     "550"
    //   ),
    //   card3 = new CardConstructor(
    //     "img/tabs/post.jpg",
    //     "Постное",
    //     `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
    //     "430"
    //   );


    /* --- Original --- */
    class MenuCard {
        constructor(src, title, descr, price, parentSelector) {
            this.src = src;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="menu__item">
                    <img src='${this.src}' alt="cardImg">
                    <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;

            this.parent.append(div);
        }
    }

    /* --- Первый способ вызова конструктора --- */
    // const div = new MenuCard(/* тут должны быть переданы значения для аргументов/параметров */);
    // div.render();

    /* --- Второй способ --- */
    new MenuCard(
      "img/tabs/vegy.jpg",
      "Фитнес",
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
      ".menu .menu__field .container"
    ).render();

    new MenuCard(
      "img/tabs/elite.jpg",
      "Премиум",
      "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      550,
      ".menu .container"
    ).render();

    new MenuCard(
      "img/tabs/post.jpg",
      "Постное",
      "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      430,
      ".menu .container"
    ).render();

    

});