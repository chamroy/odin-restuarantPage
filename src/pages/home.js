import background from "../images/background.jpg";

import "../styles/home.styles.css";
import instagram from "../images/instagram.svg";
import x from "../images/twitter.svg";
export default function homePage() {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  body.style.height = "-webkit-fill-available";
  html.style.height = "-webkit-fill-available";

  const content = document.getElementById("content");
  content.textContent = "";

  const heroDiv = document.createElement("div");
  const heroText = document.createElement("h1");
  const heroTranslate = document.createElement("p");
  heroText.textContent = "「  Ukhrul's  Serene Ambiance」";
  heroTranslate.textContent = " 「Welcome to Kazing Awung 」";
  heroDiv.classList.add("heroDiv");
  heroText.classList.add("heroText");
  heroTranslate.classList.add("HeroTranslate");
  heroDiv.appendChild(heroText);
  heroDiv.appendChild(heroTranslate);
  content.appendChild(heroDiv);

  //social Media
  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.classList.add("socialMediaDiv");

  //instagram
  const instagramDiv = document.createElement("div");
  instagramDiv.classList.add("instagramDiv");

  const instagramIcon = document.createElement("img");
  instagramIcon.src = instagram;
  instagramIcon.classList.add("instagramIcon");
  instagramDiv.appendChild(instagramIcon);
  const instagramText = document.createElement("p");
  instagramText.classList.add("instagramText");
  instagramText.textContent = "@ninglanChamroy";
  instagramDiv.appendChild(instagramText);

  const xDiv = document.createElement("div");
  xDiv.classList.add("xDiv");

  const xIcon = document.createElement("img");
  xIcon.src = x;
  xIcon.classList.add("xIcon");
  xDiv.appendChild(xIcon);
  const xText = document.createElement("p");
  xText.textContent = "@chamroy";
  xText.classList.add("xText");
  xDiv.appendChild(xText);

  socialMediaDiv.appendChild(instagramDiv);
  socialMediaDiv.appendChild(xDiv);
  content.appendChild(socialMediaDiv);
}
