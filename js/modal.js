(() => {
  const menuBtnRef = document.querySelector("[data-modal-open]");
  const mobileMenuRef = document.querySelector("[data-modal]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-hidden");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-modal-close]");
  const mobileMenuRef = document.querySelector("[data-modal]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-hidden");
  });
})(); 