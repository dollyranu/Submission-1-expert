import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import main from '../view/main';

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const contentList = document.querySelector("#content");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

contentList.addEventListener("click", function () {
    drawer.classList.remove("open");
});

document.addEventListener('DOMContentLoaded', main);