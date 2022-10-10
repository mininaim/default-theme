// Detect Sticky section
// todo: fix issue on mobile
// const stickyElm = document.querySelector(".main-navigation");
// const observer = new IntersectionObserver(
//   ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
//   { threshold: [1] }
// );
// observer.observe(stickyElm);

// ability to change to some custom fonts
const font = document.getElementById("font");
const setFont = (link, font) => {
  link.href = `https://fonts.googleapis.com/css?family=${font}:wght@400;600&display=swap`;
};
if (font) {
  const link = document.head.appendChild(document.createElement("link"));
  link.rel = "stylesheet";
  setFont(link, localStorage.getItem("font-family") ?? "Vazirmatn");
  font.addEventListener("change", function () {
    setFont(link, this.value);
    localStorage.setItem("font-family", this.value);
  });
}

// append css file when click on color and save it in local storage
let colorPallete = document.querySelectorAll(".color-pallete");
if (colorPallete) {
  colorPallete.forEach((item) => {
    item.addEventListener("click", function () {
      let color = this.getAttribute("data-color");
      localStorage.setItem("color", color);

      //console.log("The Color is: ", color);

      document.documentElement.style.setProperty("--color", color);
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `assets/css/themes/theme-${color}.css`;
      document.head.appendChild(link);
    });
  });
}

// set default color in local storage
// # fix a bug when refreshing
let color = localStorage.getItem("color");
if (color) {
  document.documentElement.style.setProperty("--color", color);
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `assets/css/themes/theme-${color}.css`;
  document.head.appendChild(link);
}
