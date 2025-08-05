import menu1 from "./images/menu-item1.jpg";
import menu2 from "./images/menu-item2.jpg";
import menu3 from "./images/menu-item3.jpg";

let menu_arr = [{
        img: menu1,
        menu_title: "Garlic aioli Chicken Wings with Glazed Yams",
        menu_description: "Creamy aioli chicken wings served alonside glazed yams and vegtables.",
        price: "£24"},
        {
        img: menu2,
        menu_title: "Roasted vegtable harvest bowl",
        menu_description: "A vibrant platter featuring roasted sweet potato, crisp cauliflower flourets, with a side of mixed vegetables.",
        price: "£16",
    },
    {
        img: menu3,
        menu_title: "Seered Salmon with Quino and Roasted Veggies",
        menu_description: "Pan-seered salmon over a bed of quino and complemented by roasted seasonal vegetables.",
        price: "£26",
    }
];

function createCard(item){
    let card = document.createElement("div");
    card.classList.add("card");
    let image = document.createElement("img");
    let text_div = document.createElement("div");
    text_div.classList.add("menu-text");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let price = document.createElement("h3");
    image.src = item.img;
    image.setAttribute("alt",item.menu_title);
    image.setAttribute("width","300px");
    image.setAttribute("height","300px");
    h3.textContent = item.menu_title;
    p.textContent = item.menu_description;
    price.textContent = item.price;
    card.appendChild(image);
    text_div.appendChild(h3);
    text_div.appendChild(p);
    text_div.appendChild(price);
    card.appendChild(text_div);
    return card;
}

export function createMenuPage(){
    let content = document.getElementById("content");
    let container = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = "Restaurant Menu";
    h2.classList.add("title");
    container.classList.add("container");
    content.appendChild(h2);
    for(let item of menu_arr){
        let card = createCard(item);
        container.appendChild(card);
    }
    content.appendChild(container);
}