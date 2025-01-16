const service = document.querySelector(".Services");
const Portfolios = document.querySelector(".Portfolios");
// const active = document.querySelector("active");

// toggle it mean click ler vea tv bet bek

// function sv() {
//   Portfolios.classList.remove("active");
//   service.classList.toggle("active");
// }
// service.addEventListener("click", sv);

service.addEventListener("click", function () {
  Portfolios.classList.remove("active");
  service.classList.toggle("active");
});
Portfolios.addEventListener("click", function () {
  service.classList.remove("active");
  Portfolios.classList.toggle("active");
});

// choj ta na kr close
document.addEventListener("click", function (e) {
  if (!e.target.closest(".Services")) service.classList.remove("active");
  if (!e.target.closest(".Portfolios")) Portfolios.classList.remove("active");
});
// --

const toggle = document.querySelector(".navbar_toggle");
const navbar_content = document.querySelector(".navebar_content");

toggle.addEventListener("click", function () {
  navbar_content.classList.toggle("active");
  toggle.classList.toggle("active");
});
