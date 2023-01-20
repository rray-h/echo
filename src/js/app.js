import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

const btn = document.getElementById('btn');
const cookies = document.getElementById('cookies');

btn.addEventListener('click', function() {
    cookies.classList.add('hide')
})

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
})

const span = document.querySelector('span');

burger.addEventListener('click', function(){
    span.classList.toggle('span')
})