const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// English ↔ Hindi typewriter tagline
const rotatingText = document.getElementById("rotatingText");
const phrases = [
  "Where Every Cup Tells a Story",
  "जहाँ हर कप एक कहानी कहता है।"
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeTagline() {
  const current = phrases[phraseIndex];
  rotatingText.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeTagline, 75);
  } else if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeTagline, 1700);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeTagline, 38);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeTagline, 450);
  }
}

typeTagline();

// Simple menu interaction
document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const original = button.textContent;
    button.textContent = "✓";
    button.setAttribute("aria-label", "Added");
    setTimeout(() => {
      button.textContent = original;
      button.setAttribute("aria-label", "Add item");
    }, 1000);
  });
});

// Contact form validation + demo submission
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    formMessage.textContent = "";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been received.";
  form.reset();
});
