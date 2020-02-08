class RangeSlider {
  constructor($elem) {
    $(".ui-slider").slider({
      min: 0,
      max: 15000,
      values: [5000, 10000],
      range: true,
      stop: function(event, ui) {
        jQuery("div.range-slider__value").text(
          jQuery(".ui-slider").slider("values", 0) +
            "₽ -" +
            jQuery(".ui-slider").slider("values", 1) +
            "₽"
        );
      },
      slide: function(event, ui) {
        jQuery("div.range-slider__value").text(
          jQuery(".ui-slider").slider("values", 0) +
            "₽ -" +
            jQuery(".ui-slider").slider("values", 1) +
            "₽"
        );
      }
    });
  }
}
