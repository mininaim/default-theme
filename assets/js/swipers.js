// Init categoriesSwiper
const swiper = new Swiper(".categoriesSwiper", {
  lazy: true,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
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
  navigation: {
    nextEl: ".swiper-button-next-categories",
    prevEl: ".swiper-button-prev-categories",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// Init featuredSwiper
const swiper2 = new Swiper(".featuredSwiper", {
  lazy: true,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  keyboard: {
    enabled: true,
  },
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
  navigation: {
    nextEl: ".swiper-button-next-featured",
    prevEl: ".swiper-button-prev-featured",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// Init discountSwiper
const swiper3 = new Swiper(".discountSwiper", {
  lazy: true,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  keyboard: {
    enabled: true,
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
  navigation: {
    nextEl: ".swiper-button-next-discount",
    prevEl: ".swiper-button-prev-discount",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// Init besetSellerSwiper
const swiper4 = new Swiper(".besetSellerSwiper", {
  lazy: true,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  keyboard: {
    enabled: true,
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
  navigation: {
    nextEl: ".swiper-button-next-best-seller",
    prevEl: ".swiper-button-prev-best-seller",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// Init besetSellerSwiper
const swiper5 = new Swiper(".recentlyArrivedSwiper", {
  lazy: true,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  keyboard: {
    enabled: true,
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
  navigation: {
    nextEl: ".swiper-button-next-recently-arrived",
    prevEl: ".swiper-button-prev-recently-arrived",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// Init partnersSwiper
const swiper6 = new Swiper(".partnersSwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-sm",
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
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// Init reviewsSwiper
const swiper7 = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
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
