// GUTT ROYALE — interactive landing page

const eventDate = new Date("2026-11-27T20:00:00-03:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;
  const ids = ["days", "hours", "minutes", "seconds"];

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  [days, hours, minutes, seconds].forEach((value, index) => {
    document.getElementById(ids[index]).textContent = String(value).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal-on-scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal, .artist, .experience-card, .partner").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Add a compact scrolled state to the header
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.background = window.scrollY > 40
    ? "rgba(5,5,5,.92)"
    : "rgba(5,5,5,.72)";
}, { passive: true });
