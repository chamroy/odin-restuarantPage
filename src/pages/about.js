import "../styles/about.styles.css";

export default function about() {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  body.style.height = "100vh";
  html.style.height = "100vh";

  const content = document.getElementById("content");
  content.textContent = "";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutDiv");

  const aboutStoreDiv = document.createElement("h1");
  aboutStoreDiv.classList.add("aboutStoreDiv");

  const aboutStoreQuestion = document.createElement("h1");
  aboutStoreQuestion.classList.add("aboutStoreQuestion");
  aboutStoreQuestion.textContent = "What is Awung Kazing";

  const aboutStoreText = document.createElement("h2");
  aboutStoreText.classList.add("aboutStoreText");
  aboutStoreText.textContent =
    "Kazing Awung was born from the spirit of Ukhrul’s vibrant night streets, where laughter flows as freely as warm drinks under the glow of streetlights. Inspired by peaceful late-night gatherings over local brews and sizzling street bites, we aim to create a haven where every sip and conversation feels like home";

  aboutStoreDiv.appendChild(aboutStoreQuestion);
  aboutStoreDiv.appendChild(aboutStoreText);
  aboutDiv.appendChild(aboutStoreDiv);

  // Opening hours
  const openHoursDiv = document.createElement("div");
  openHoursDiv.classList.add("openHoursDiv");

  const openHoursTitle = document.createElement("h1");
  openHoursTitle.classList.add("openHoursTitle");
  openHoursTitle.textContent = "Hours of operation";

  const openHoursTimeDiv = document.createElement("div");
  openHoursTimeDiv.classList.add("openHoursTimeDiv");

  const openHoursMonFri = document.createElement("p");
  openHoursMonFri.classList.add("openHoursMonFri");
  openHoursMonFri.textContent = "Monday - Friday: 9:00 AM - 9:00PM";

  const openHoursSatSun = document.createElement("p");
  openHoursSatSun.classList.add("openHoursSatSun");
  openHoursSatSun.textContent = "Saturday - Sunday: 4:00 PM - 10:00PM";

  openHoursTimeDiv.appendChild(openHoursMonFri);
  openHoursTimeDiv.appendChild(openHoursSatSun);
  openHoursDiv.appendChild(openHoursTitle);
  openHoursDiv.appendChild(openHoursTimeDiv);

  aboutDiv.appendChild(openHoursDiv);
  content.appendChild(aboutDiv);
}
