'use strict';

/**
 * touchstart - тап(клик) по элементу в мобильных и десктопных устройствах
 * touchmove - скольжение пальца(тапа/клика) по элементу в мобильных и десктопных устройствах
 * touchend - отрываение пальца(тапа/клика) от элемента в мобильных и десктопных устройствах
 * touchenter - непреднамеренное скольжение пальца(тапа/клика) по элементу в мобильных и десктопных устройствах
 * touchleave - отскальзивание пальца(тапа/клика) от периметра элемента в мобильных и десктопных устройствах
 * touchcancel - при сёрфировании (при выходе пальца за територии сенсора)
 */

/**
 * events:
 * touches
 * targetTouches
 * changedTouches - пальцы которые убрались или совершили какое либо действие 
 */

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', e => {
        e.preventDefault();

        console.log('Start');
    });
    box.addEventListener('touchmove', e => {
        e.preventDefault();

        console.log('Move');
    });
    box.addEventListener('touchend', e => {
        e.preventDefault();

        console.log('End');
    });
});