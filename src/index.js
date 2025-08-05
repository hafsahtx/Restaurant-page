import "./styles.css";
import { createHomepage } from "./home";
import { createMenuPage } from "./menu";
import { createAboutUsPage } from "./about";

createHomepage();
let home_button = document.querySelector(".home");
let menu_button = document.querySelector(".menu");
let about_button = document.querySelector(".about");
let content = document.getElementById("content");
menu_button.addEventListener("click",()=>{
    content.innerHTML = "";
    createMenuPage();
});
home_button.addEventListener("click",()=>{
    content.innerHTML = "";
    createHomepage();
});
about_button.addEventListener("click",()=>{
    content.innerHTML = "";
    createAboutUsPage();
});