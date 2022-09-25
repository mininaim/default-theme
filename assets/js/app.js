// Scroll to top
// note: dependencies: jQuery
$(window).on("scroll", function () {
  if (window.scrollY > window.outerHeight) {
    $("#scrollToTop").addClass("active");
  } else {
    $("#scrollToTop").removeClass("active");
  }
});
$("#scrollToTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// Nested Dropdown Menu
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 992) {
    document
      .querySelectorAll(".nav .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            everysubmenu.style.display = "none";
          });
        });
      });
    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
});

// Feather Icons
feather.replace();

// Progress Loader
let bar = new ProgressBar.Line("#progress", {
  strokeWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFD14B",
  trailColor: "#8d5ea7",
  trailWidth: 0,
  svgStyle: { width: "100%", height: "3px" },
});
bar.animate(2.0);

// Enable tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Detect Sticky section
// todo: fix issue on mobile
const stickyElm = document.querySelector(".main-navigation");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  { threshold: [1] }
);
observer.observe(stickyElm);

// Handle Load more button
// let loadMoreReviewsButton = document.getElementById("loadMoreReviewsButton");
// loadMoreReviewsButton.addEventListener("click", function () {
//   let reviews = document.getElementById("reviews");
//   reviews.classList.remove("end-opacity");
//   loadMoreReviewsButton.classList.add("d-none");
// });
