import Slider from "./slider";
document.addEventListener("DOMContentLoaded", () => {
  const $slider = $(".js-slider");

  $slider.each(function() {
    new Slider($(this));
  });
});