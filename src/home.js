import foodImg from "./images/food.jpg";

export function createHomepage(){
    let content = document.getElementById("content");
    let img = document.createElement("img");
    img.src = foodImg;
    img.classList.add("background-img");
    img.setAttribute("alt","platter of food");
    img.setAttribute("height","600px")
    let div = document.createElement("div");
    div.classList.add("content-body");
    let h1 = document.createElement("h1");
    h1.textContent = "Enjoy our delicous Menu";
    let p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let button = document.createElement("button");
    button.innerHTML = "View Our Menu";
    button.classList.add("menu-button");
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button);
    content.appendChild(img);
    content.appendChild(div);
}
