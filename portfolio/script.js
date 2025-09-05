// Responsive menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerHTML = document.body.classList.contains("dark") 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  body.dark { background:#121212; color:#eee; }
  body.dark header { background:#1e1e1e; }
  body.dark .card, body.dark .project-card, body.dark .skill { background:#1e1e1e; color:#eee; }
  body.dark footer { background:#000; }
`;
document.head.appendChild(style);

// Show More Projects
const showMoreBtn = document.getElementById("showMoreBtn");
const hiddenProjects = document.querySelectorAll(".project-card.hidden");

showMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach(project => project.classList.toggle("hidden"));
  showMoreBtn.textContent =
    showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
});

// Scroll reveal animations
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Animate skill bars when in view
const skillFills = document.querySelectorAll(".fill");
function animateSkills() {
  skillFills.forEach(fill => {
    const parent = fill.parentElement.getBoundingClientRect().top;
    if (parent < window.innerHeight - 50 && !fill.classList.contains("animate")) {
      fill.classList.add("animate");
      fill.style.width = fill.getAttribute("style").match(/width:\s*(\d+%)/)[1];
    }
  });
}
window.addEventListener("scroll", animateSkills);
