// Init Ion Range Slider

let $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 0,
  max = 10000,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 0,
  to: 10000,
  onStart: updateInputs,
  onChange: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  let val = $(this).prop("value");
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }
  instance.update({
    from: val,
  });
});

$inputTo.on("input", function () {
  let val = $(this).prop("value");
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }
  instance.update({
    to: val,
  });
});
