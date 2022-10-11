// tiny slider custom

// hide slider and thumbnail when there is one picture
if ($("#product").children().length > 1) {
  $(
    "#customize-controls button, .product-tools, #pills-tab, #pills-gallery"
  ).removeAttr("hidden");
}

let product = document.getElementById("product");

if (product) {
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
  });

  $("#prev").click(function () {
    slider.goTo("prev");
  });

  $("#next").click(function () {
    slider.goTo("next");
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
}
