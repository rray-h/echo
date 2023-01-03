import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();


const burger = document.getElementById('burger');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const span = document.getElementById('span')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')

burger.addEventListener('click', function() {
    menu1.classList.toggle('block')
    menu2.classList.toggle('block')
    span.classList.toggle('active')
    span2.classList.toggle('active')
    span3.classList.toggle('active')
})