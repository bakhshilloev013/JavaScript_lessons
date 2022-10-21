'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const tabsWrapper = document.querySelector('.tabheader__items'),
          tabs = tabsWrapper.querySelectorAll('.tabheader__item'),
          tabsContents = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabsContents.forEach(content => {
            content.classList.remove('show', 'fade');
            content.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    };

    function showTabContent(i) {
        tabsContents[i].classList.remove('hide');
        tabsContents[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    // 1)
    // tabs.forEach((tab, i) => {
    //     tab.addEventListener('click', () => {
    //         hideTabContent();
    //         showTabContent(i);
    //     })
    // })

    //2)
    tabsWrapper.addEventListener('click', onTabClick);

    function onTabClick(e) {
        const {target} = e;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                };
            });
        };
    };


});