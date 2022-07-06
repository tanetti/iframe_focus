(() => {
  const refs = {
    controlBtn: document.querySelector("[data-control]"),
    controlPanel: document.querySelector("[data-control-panel]"),
    logo: document.querySelector("[data-logo]"),
    backdrop: document.querySelector("[data-backdrop]"),
    frame: document.querySelector("[data-frame]"),
  };

  refs.controlBtn.addEventListener("click", () => {
    refs.controlBtn.classList.toggle("is-expanded");
    refs.controlPanel.classList.toggle("is-expanded");
    refs.logo.classList.toggle("is-expanded");
    refs.backdrop.classList.toggle("is-shown");
    refs.frame.classList.toggle("is-expanded");
  });
})();
