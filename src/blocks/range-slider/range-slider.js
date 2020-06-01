import '../ui-slider/ui-slider';
class RangeSlider {
  constructor($elem) {
    this.$rangeSlider = $elem;
    this.$sliderValue = this.$rangeSlider.find('.js-range-slider__value');
    this.$uiSlider = this.$rangeSlider.find('.js-ui-slider');
    this.sumTypes = this.$rangeSlider.attr('data-min');
    this.min = parseInt(this.$rangeSlider.attr('data-min'));
    this.max = parseInt(this.$rangeSlider.attr('data-max'));
    this.values = JSON.parse(this.$rangeSlider.attr('data-values'));
    this.range = this.$rangeSlider.attr('data-range') == 'true';
    this.$uiSlider.slider({
      min: this.min,
      max: this.max,
      values: this.values,
      range: this.range,
      stop: (event, ui) => {
        this.$sliderValue.text(
          `${this.$uiSlider.slider('values', 0)
          }₽ -${
            this.$uiSlider.slider('values', 1)
          }₽`,
        );
      },
      slide: (event, ui) => {
        this.$sliderValue.text(
          `${this.$uiSlider.slider('values', 0)
          }₽ -${
            this.$uiSlider.slider('values', 1)
          }₽`,
        );
      },
    });
  }
}
export default RangeSlider;
