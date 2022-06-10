const menu = document.querySelector("#menuItems");
const menuButton = document.querySelector("#menuButton");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

close.style.display = "none";

function toggleMenu() {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    open.style.display = "none";
    close.style.display = "block";
  } else {
    open.style.display = "block";
    close.style.display = "none";
  }
}

menuButton.addEventListener("click", toggleMenu);

/// Hid nav on scroll

let scrollPosition = window.scrollY;
const nav = document.querySelector("nav");

function hideNav() {
  const newScrollPosition = window.scrollY;
  if (scrollPosition > newScrollPosition) {
    nav.style.transform = "translateY(0px)";
  } else {
    nav.style.transform = "translateY(-100%)";
  }

  scrollPosition = newScrollPosition;
}

window.addEventListener("scroll", hideNav);

/// Show and hide contact success modal
const successModal = document.querySelector("#contact-success");
const closeModal = document.querySelector("#close-modal");
const contactForm = document.querySelector("#contact-form");

function showSuccessModal() {
  successModal.style.display = "flex";
}
contactForm.addEventListener("submit", showSuccessModal);

function closeSuccessModal() {
  successModal.style.display = "none";
}
closeModal.addEventListener("click", closeSuccessModal);
