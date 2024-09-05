function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Register GSAP Plugin
gsap.registerPlugin(TextPlugin);

// GSAP Animation
const Spice = document.getElementById("gsap-name");

gsap.to(Spice, {
  duration: 2,
  text: "Rizky Raihan",
});
