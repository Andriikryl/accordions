import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const controls = self.querySelector(".accordion__control-two");
      const content = self.querySelector(".accordion__content-two");

      content.classList.toggle("open");
    });
  });
});
