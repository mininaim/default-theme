// clipboard to copy
let clipboard = new ClipboardJS(".btn-clipboard");

clipboard.on("success", function (e) {
  e.trigger.innerHTML = '<i class="iconoir-check"></i>';

  setTimeout(function () {
    e.trigger.innerHTML = '<i class="iconoir-copy"></i>';
  }, 1000);

  e.clearSelection();
});

// tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// toast
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample, {
      delay: 4000,
      autohide: true,
      animation: true,
    });

    toast.show();
  });
}

// custom select
$(function () {
  $(".custom-select").selectpicker();
});

// scroll to top
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

// nested dropdown menu
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

// feather icons
feather.replace();

// progress loader
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-primary",
  "#eeeeee"
);

let bar = new ProgressBar.Line("#progress", {
  strokeWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  color: "#000000",
  trailColor: "#ddd",
  trailWidth: 0,
  svgStyle: { width: "100%", height: "3px" },
});
bar.animate(2.0);

// Enable popover
// const popoverTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="popover"]'
// );
// const popoverList = [...popoverTriggerList].map(
//   (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
// );

// Detect Sticky section
// todo: fix issue on mobile
// const stickyElm = document.querySelector(".main-navigation");
// const observer = new IntersectionObserver(
//   ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
//   { threshold: [1] }
// );
// observer.observe(stickyElm);

// add/remove effect on flexSwitchCheckDefaultFilter
let flexSwitchCheckDefaultFilter = document.getElementById(
  "flexSwitchCheckDefaultFilter"
);

if (flexSwitchCheckDefaultFilter) {
  flexSwitchCheckDefaultFilter.addEventListener("change", function () {
    if (this.checked) {
      document
        .getElementById("flexSwitchCheckDefaultFilter")
        .classList.remove("pulse-grouped");
    } else {
      document

        .getElementById("flexSwitchCheckDefaultFilter")
        .classList.add("pulse-grouped");
    }
  });
}

// check if couponCode is empty
let couponCode = document.getElementById("couponCode");
if (couponCode) {
  couponCode.addEventListener("keyup", function () {
    if (this.value.length > 0) {
      document.getElementById("applyCoupon").disabled = false;
    } else {
      document.getElementById("applyCoupon").disabled = true;
    }
  });
}

// check if email is empty

let EmailNotification = document.getElementById("EmailNotification");
if (EmailNotification) {
  EmailNotification.addEventListener("keyup", function () {
    // valid email
    if (this.value.length > 0 && this.value.includes("@")) {
      document.getElementById("ApplyEmailNotification").disabled = false;
    } else {
      document.getElementById("ApplyEmailNotification").disabled = true;
    }
  });
}

// init rater

if ($("#rater").length)
  raterJs({
    starSize: 20,
    reverse: true,
    // element: document.querySelector("#rater"),
    // rateCallback: function (t, e) {
    //   this.setRating(t), e();
    // },
    element: document.querySelector("#rater"),
    rateCallback: function rateCallback(rating, done) {
      this.setRating(rating);
      done();
    },
    onHover: function (currentIndex, currentRating) {
      document.querySelector(".live-rating").textContent = currentIndex;
    },
    onLeave: function (currentIndex, currentRating) {
      document.querySelector(".live-rating").textContent = currentRating;
    },
  });

// zoom image
function zoom(t) {
  let e = t.currentTarget;
  t.offsetX ? (offsetX = t.offsetX) : (offsetX = t.touches[0].pageX),
    t.offsetY ? (offsetY = t.offsetY) : (offsetX = t.touches[0].pageX),
    (x = (offsetX / e.offsetWidth) * 100),
    (y = (offsetY / e.offsetHeight) * 100),
    (e.style.backgroundPosition = x + "% " + y + "%");
}

// smooth scroll

let scroll = new SmoothScroll("[data-scroll]", {
  speed: 500,
  speedAsDuration: true,
});

// navbar stuck
!(function () {
  "use strict";

  var t, r, n, a, o, l, e;
  null != (r = document.querySelector(".navbar-sticky")) &&
    (r.classList,
    (t = r.offsetHeight),
    window.addEventListener("scroll", function (e) {
      r.classList.contains("position-absolute")
        ? 500 < e.currentTarget.pageYOffset
          ? r.classList.add("navbar-stuck")
          : r.classList.remove("navbar-stuck")
        : 500 < e.currentTarget.pageYOffset
        ? ((document.body.style.paddingTop = t + "px"),
          r.classList.add("navbar-stuck"))
        : ((document.body.style.paddingTop = ""),
          r.classList.remove("navbar-stuck"));
    })),
    (e = document.querySelector(".navbar-stuck-toggler")),
    (n = document.querySelector(".navbar-stuck-menu")),
    null != e &&
      e.addEventListener("click", function (e) {
        n.classList.toggle("show"), e.preventDefault();
      }),
    function () {
      var e = document.querySelector(".navbar-stuck-menu");
      null != e &&
        e.addEventListener("click", function (e) {
          e.target.classList.contains("dropdown-toggle") && e.preventDefault();
        });
    };
})();

// set default color in local storage
// let color = localStorage.getItem("color");
// if (color) {
//   document.documentElement.style.setProperty("--color", color);
//   let link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = `assets/css/themes/theme-${color}.css`;
//   document.head.appendChild(link);
// }

// append css file when click on color and save it in local storage
let colorPallete = document.querySelectorAll(".color-pallete");
if (colorPallete) {
  colorPallete.forEach((item) => {
    item.addEventListener("click", function () {
      let color = this.getAttribute("data-color");
      localStorage.setItem("color", color);

      console.log("The Color is: ", color);

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

// add class to body when click on ltr mode
// let ltrMode = document.getElementById("ltrMode");
// if (ltrMode) {
//   ltrMode.addEventListener("click", function () {
//     // change dir and lang attribute
//     document.documentElement.setAttribute("dir", "ltr");
//     document.documentElement.setAttribute("lang", "en");
//     // document.body.classList.toggle("ltr");
//   });
// }

//get fonts from dropdown list and append it to css file
// let font = document.getElementById("font");

// localStorage.getItem("font");

// font.addEventListener("change", function () {
//   let oldLink = document.querySelector("link[href*='assets/css/fonts/']");
//   if (oldLink) {
//     oldLink.remove();
//     //console.log("Removing", oldLink.outerHTML);
//   }

//   let fontName = this.value;

//   let link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = `assets/css/fonts/font-${fontName}.css`;
//   document.head.appendChild(link);

//   localStorage.setItem("font", this.value);

// set option to selected
// let options = document.querySelectorAll("#font option");
// options.forEach((option) => {
//   if (option.value == fontName) {
//     option.setAttribute("selected", "selected");
//   }
// });

//console.log("Switching to ", link.outerHTML);
//});

//get fonts from dropdown list and append it to css file
// const font = document.getElementById("font");
// const setFont = (link, font) => {
//   link.href = `https://fonts.googleapis.com/css?family=${font}`;
// };
// if (font) {
//   const link = document.head.appendChild(document.createElement("link"));
//   link.rel = "stylesheet";
//    setFont(link, localStorage.getItem('font-family') ?? 'Sans');
//   font.addEventListener("change", function () {
//     setFont(link, this.value);
//     localStorage.setItem('font-family', this.value);
//   });
// }

// ability to change to some custom fonts
const font = document.getElementById("font");
const setFont = (link, font) => {
  link.href = `https://fonts.googleapis.com/css?family=${font}&display=swap`;
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

// change color
// ability to change to some custom fonts
// const colorPrimary = document.getElementById("color");
// const setColor = (linkColor, colorPrimary) => {
//   linkColor.href = `assets/css/themes/theme-${colorPrimary}.css`;
// };
// if (colorPrimary) {
//   const linkColor = document.head.appendChild(document.createElement("link"));
//   linkColor.rel = "stylesheet";
//   setColor(linkColor, localStorage.getItem("--color-primary") ?? "primary");
//   colorPrimary.addEventListener("change", function () {
//     setColor(linkColor, this.value);
//     localStorage.setItem("--color-primary", this.value);
//   });
// }

// Handle Load more button
let loadMoreReviewsButton = document.getElementById("loadMoreReviewsButton");
loadMoreReviewsButton.addEventListener("click", function () {
  let reviews = document.getElementById("reviews");
  let loadmore = document.getElementById("loadmore");

  //remove with animation
  // reviews.classList.add("d-none");
  // loadmore.classList.remove("d-none");

  setTimeout(function () {
    loadmore.classList.add("d-none");
  }, 300);

  setTimeout(function () {
    reviews.classList.remove("d-none");
  }, 300);
});
