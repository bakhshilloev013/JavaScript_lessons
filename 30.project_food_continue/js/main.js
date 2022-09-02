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
        // 933832333
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
    // const deadLine = '2022-09-15';

    // function getTimeRemaining(endTime) {
    //     const t = Date.parse(endTime) - Date.parse(new Date()),
    //           days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    //           minutes = Math.floor((t / 1000 / 60) % 60),
    //           seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         'total': t,
    //         days,
    //         hours,
    //         minutes,
    //         seconds
    //     };
    // }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //           days = timer.querySelector('#days'),
    //           hours = timer.querySelector('#hours'),
    //           minutes = timer.querySelector('#minutes'),
    //           seconds = timer.querySelector('#seconds'),
    //           timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endTime);
            
    //         for (let key in t) {
    //             if (t[key]>= 0 && t[key] < 10) {
    //                 t[key] = `0${t[key]}`;
    //             };
    //         };

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadLine);
});