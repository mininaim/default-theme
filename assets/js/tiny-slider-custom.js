// tiny slider custom
if ($("#product").children().length > 0) {
  $(".product-tools").removeAttr("hidden");
}

var slider = tns({
  container: "#product",
  //navContainer: "#productThumbnails",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  mouseDrag: false,
  loop: true,
  center: true,

  gutter: 0,
  speed: 400,
  loop: false,
  responsive: {
    768: {
      items: 1,
      gutter: 0,
    },
    992: {
      items: 1,
      gutter: 0,
    },
    1200: {
      items: 1,
      gutter: 0,
    },
  },
});

$("#prev").click(function () {
  slider.goTo("prev");
});

$("#next").click(function () {
  slider.goTo("next");
});

var sliderThumbnails = tns({
  container: "#productThumbnails",
  items: 4,
  //slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  mouseDrag: true,
  gutter: 0,
  speed: 400,
  loop: false,
  //   responsive: {
  //     768: {
  //       items: 4,
  //       gutter: 0,
  //     },
  //     992: {
  //       items: 4,
  //       gutter: 0,
  //     },
  //     1200: {
  //       items: 5,
  //       gutter: 0,
  //     },
  //   },
});

$("#productThumbnails").on("click", ".thumbnails-img", function () {
  var index = $(this).parent().index();
  slider.goTo(index);
});

slider.events.on("indexChanged", function (info) {
  sliderThumbnails.goTo(info.displayIndex);
});

$("#productThumbnails").on("click", ".thumbnails-img", function () {
  $(this)
    .addClass("active")
    .parent()
    .siblings()
    .find(".thumbnails-img")
    .removeClass("active");
});

slider.events.on("indexChanged", function (info) {
  $("#productThumbnails .thumbnails-img")
    .eq(info.displayIndex)
    .addClass("active")
    .parent()
    .siblings()
    .find(".thumbnails-img")
    .removeClass("active");
});