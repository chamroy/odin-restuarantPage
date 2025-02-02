import "../styles/menu.styles.css";
import beer from "../images/beer.jpg";
import jwine from "../images/jwine.jpg";
import kimchi from "../images/kimchi.jpg";
import momo from "../images/momo.jpg";
import salad from "../images/salad.jpg";
import korean from "../images/korean.jpg";

const menuItems = [
  {
    img: beer,
    title: "Hao Beer",
    description: "Served with cups of Hao beer",
    price: "₹ 350",
    alt: "local Ukhrul made beer",
    className: "beer",
  },
  {
    img: jwine,
    title: "Classic Plum Wine",
    description: "Served with a 750ml bottle of Plum Wine",
    price: "₹ 250",
    alt: "Japanese Beer",
    className: "jwine",
  },
  {
    img: kimchi,
    title: "Kimchi",
    description: "Includes a plate serving for two.",
    price: "₹ 250",
    alt: "Kimchi",
    className: "kimchi",
  },
  {
    img: momo,
    title: "Momo",
    description: "Served with a plate containing 9 pieces of Momos.",
    price: "₹ 200",
    alt: "Momo",
    className: "momo",
  },
  {
    img: salad,
    title: "Chicken Salad",
    description: "Served with a salad for two.",
    price: "₹ 200",
    alt: "Salad",
    className: "salad",
  },

  {
    img: korean,
    title: "Rice Wine",
    description: "Served with one 175ml bottle.",
    price: "₹ 150",
    alt: "Rice",
    className: "korean",
  },
];
export default function menu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");

  function createMenuItem({ img, title, description, price, alt, className }) {
    const itemDiv = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemTitle = document.createElement("h2");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

    itemImg.src = img;
    itemImg.alt = alt;
    itemTitle.textContent = title;
    itemDescription.textContent = description;
    itemPrice.textContent = price;


    itemDiv.classList.add(`${className}Div`);
    itemImg.classList.add(`${className}Img`);
    itemTitle.classList.add(`${className}Title`);
    itemDescription.classList.add(`${className}Description`);
    itemPrice.classList.add(`${className}Price`);

     itemDiv.appendChild(itemImg);
     itemDiv.appendChild(itemTitle);
     itemDiv.appendChild(itemDescription);
     itemDiv.appendChild(itemPrice);

     return itemDiv

  }

  menuItems.forEach(item => {
    const menuItem = createMenuItem(item);
    menuDiv.appendChild(menuItem)
  })

  content.appendChild(menuDiv)
}