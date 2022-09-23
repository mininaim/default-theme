// Scroll to top
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

const swiper = new Swiper(".categoriesSwiper", {
  // Optional parameters
  lazy: true,

  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  // grabCursor: false,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   // type: "bullets",
  // },
  // pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-categories",
    prevEl: ".swiper-button-prev-categories",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const swiper2 = new Swiper(".featuredSwiper", {
  // Optional parameters
  lazy: true,

  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  // grabCursor: false,
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   // type: "bullets",
  // },
  // pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-featured",
    prevEl: ".swiper-button-prev-featured",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const swiper3 = new Swiper(".discountSwiper", {
  // Optional parameters
  lazy: true,

  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  // grabCursor: false,
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   // type: "bullets",
  // },
  // pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-discount",
    prevEl: ".swiper-button-prev-discount",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const swiper4 = new Swiper(".besetSellerSwiper", {
  // Optional parameters
  lazy: true,

  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  // grabCursor: false,
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   // type: "bullets",
  // },
  // pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-best-seller",
    prevEl: ".swiper-button-prev-best-seller",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const swiper5 = new Swiper(".recentlyArrivedSwiper", {
  // Optional parameters
  lazy: true,

  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  // grabCursor: false,
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   // type: "bullets",
  // },
  // pagination: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-recently-arrived",
    prevEl: ".swiper-button-prev-recently-arrived",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const swiper6 = new Swiper(".partnersSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const swiper7 = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// Init Slick
// #todo: Get rid of jQuery dependency
$(document).ready(function () {
  $(".slick").slick({
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rtl: true,
    centerMode: true,
    centerPadding: "60px",
  });
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

// Handle Load more button
// let loadMoreReviewsButton = document.getElementById("loadMoreReviewsButton");
// loadMoreReviewsButton.addEventListener("click", function () {
//   let reviews = document.getElementById("reviews");
//   reviews.classList.remove("end-opacity");
//   loadMoreReviewsButton.classList.add("d-none");
// });

// fix issue on mobile
const stickyElm = document.querySelector(".main-navigation");

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(stickyElm);
