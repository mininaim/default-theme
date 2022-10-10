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
// let primaryColor = getComputedStyle(document.documentElement).getPropertyValue(
//   "--color-primary",
//   "#eeeeee"
// );

// let bar = new ProgressBar.Line("#progress", {
//   strokeWidth: 1,
//   easing: "easeInOut",
//   duration: 1400,
//   color: "#444444",
//   trailColor: "#ffffff",
//   trailWidth: 0,
//   svgStyle: { width: "100%", height: "3px" },
// });
// bar.animate(2.0);

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

// init rating stars
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

// Handle Load more button
let loadMoreReviewsButton = document.getElementById("loadMoreReviewsButton");

if (loadMoreReviewsButton) {
  loadMoreReviewsButton.addEventListener("click", function () {
    let reviews = document.getElementById("reviews");
    let loadmore = document.getElementById("loadmore");
    setTimeout(function () {
      loadmore.classList.add("d-none");
    }, 300);

    setTimeout(function () {
      reviews.classList.remove("d-none");
    }, 300);
  });
}

// init lightbox
var lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  closeEffect: "fade",
  skin: "clean",
  draggable: true,
});
