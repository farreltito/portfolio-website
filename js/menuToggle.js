document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-menu-btn");

  hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
    });

  overlay.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    });

  closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    });
});
