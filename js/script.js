// ======================
// PROJECTS DROPDOWN
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const projectsToggle = document.getElementById("projectsToggle");
const projectsNav = document.querySelector(".nav-projects");

projectsToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  projectsNav.classList.toggle("open");
});


// Close Projects dropdown when clicking outside

document.addEventListener("click", (e) => {
  if (!projectsNav.contains(e.target)) {
    projectsNav.classList.remove("open");
  }
});


// Close Projects dropdown when clicking a project link

document.querySelectorAll(".projects-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    projectsNav.classList.remove("open");
  });
});