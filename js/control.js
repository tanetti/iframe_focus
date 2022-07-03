(() => {
  const refs = {
    controlBtn: document.querySelector("[data-control]"),
    logo: document.querySelector("[data-logo]"),
    backdrop: document.querySelector("[data-backdrop]"),
    frame: document.querySelector("[data-frame]"),
  };

  refs.controlBtn.addEventListener("click", () => {
    refs.logo.classList.toggle("is-expanded");
    refs.backdrop.classList.toggle("is-shown");
    refs.frame.classList.toggle("is-expanded");
  });
})();
