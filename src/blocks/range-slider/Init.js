import RangeSlider from "./range-slider";
document.addEventListener("DOMContentLoaded", () => {

  const $rangeSliders = $(".js-range-slider");
  $rangeSliders.each(function() {
    new RangeSlider($(this));
  });
});
