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

});