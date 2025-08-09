import restaurant from "./images/restaurant.jpg";

export function createAboutUsPage(){
    let content = document.getElementById("content");
    let h2 = document.createElement("h2");
    h2.classList.add("title");
    h2.textContent = "About us";
    let text_div = document.createElement("div");
    text_div.classList.add("about-content");
    let img = document.createElement("img");
    img.src = restaurant;
    img.setAttribute("width","500px");
    img.setAttribute("height","500px");
    let about_text = document.createElement("div");
    about_text.style.width = "500px";
    let h2_about = document.createElement("h2");
    h2_about.textContent = "Our Story";
    let p1 = document.createElement("p");
    p1.classList.add("p_about");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
    let p2 = document.createElement("p");
    p2.classList.add("p_about");
    p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
    let p3 = document.createElement("p");
    p3.classList.add("p_about");
    p3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur."
    about_text.appendChild(h2_about);
    about_text.appendChild(p1);
    about_text.appendChild(p2);
    about_text.appendChild(p3);
    text_div.appendChild(about_text);
    text_div.appendChild(img);
    content.appendChild(h2);
    content.appendChild(text_div);
}