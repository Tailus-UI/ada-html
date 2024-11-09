import "./assets/css/tailus.css";

const mainHeader = document.querySelector("#header");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
})