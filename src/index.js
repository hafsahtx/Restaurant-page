import "./styles.css";
import { createHomepage } from "./home";
import { createMenuPage } from "./menu";

createHomepage();
let home_button = document.querySelector(".home");
let menu_button = document.querySelector(".menu");
let content = document.getElementById("content");
menu_button.addEventListener("click",()=>{
    content.innerHTML = "";
    createMenuPage();
});
home_button.addEventListener("click",()=>{
    content.innerHTML = "";
    createHomepage();
});