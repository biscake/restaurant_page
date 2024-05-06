import './style.css';
import loadMain from './main-page';
import loadMenu from './menu';

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    const id = e.target.id;
    switch(id) {
        case "main":
            loadMain();
            break
        case "menu":
            loadMenu();
            break
    }
})

window.onload = loadMain();