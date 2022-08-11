'use strict';
const btn = document.querySelector('.btn'),
      wrapper = document.querySelector('.wrap');

btn.addEventListener('click', e => {
    console.log('btn clicked');
    // console.log(e.target);
    // console.log(e.currentTarget);
    e.stopPropagation();
});
wrapper.addEventListener('click', e => {
    console.log('wrapper clicked');
    // console.log(e.target);
    // console.log(e.currentTarget);
});
document.body.addEventListener('click', e => {
    console.log('body clicked');
})

wrapper.addEventListener('click', e => {
    console.log('wrapper clicked');
}, {capture: true});
document.body.addEventListener('click', e => {
    console.log('body clicked');
}, {capture: true})

