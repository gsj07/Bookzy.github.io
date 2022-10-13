const menuToggle = document.querySelector(".toggle");
c▼onst showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});