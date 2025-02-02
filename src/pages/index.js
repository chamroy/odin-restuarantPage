import homePage from "./home.js"
import menu from "./menu.js"
import about from "./about.js"
import "../styles/index.style.css";

const headerLogo = document.querySelector(".header-logo");
const headline = document.createElement("h2");
headline.textContent = "Kazing Awung";
headline.classList.add("kazing-awung");
headerLogo.appendChild(headline);

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menu);
aboutButton.addEventListener("click", about);
homePage()


// const content = document.getElementById("content");
// const hotelImage = document.createElement("img");
// hotelImage.src = hotel;
// hotelImage.alt = "restaurant image "
// hotelImage.className = "responsive-img";
// content.appendChild(hotelImage);