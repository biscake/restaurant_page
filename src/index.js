import './style.css';
import loadMain from './main-page';

const mainPage = document.querySelector("#main");
mainPage.addEventListener("click", () => {
    loadMain();
    console.log("loaded");
});