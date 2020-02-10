class Slider {
  constructor($elem) {
    this.$slider = $elem;
    this.$slidewrapper = this.$slider.find(".slider__slidewrapper");
    this.$viewport = this.$slider.find(".slider__viewport");
    this.$nextButton = this.$slider.find(".slider__next-btn");
    this.$prevButton = this.$slider.find(".slider__prev-btn");
    this.$navButtons = this.$slider.find(".slide-nav-btn");
    this.slideNow = 1;
    this.slideCount = this.$slidewrapper.children().length;
    this.slideInterval = 3000;
    this.navBtnId = 0;
    this.translateWidth = 0;
    this.bindEventListeners();
  }

  nextSlide() {
    if (
      this.slideNow == this.slideCount ||
      this.slideNow <= 0 ||
      this.slideNow > this.slideCount
    ) {
      this.$slidewrapper.css("transform", "translate(0, 0)");
      this.slideNow = 1;
    } else {
      this.translateWidth = -this.$viewport.width() * this.slideNow;
      this.$slidewrapper.css({
        transform: "translate(" + this.translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + this.translateWidth + "px, 0)",
        "-ms-transform": "translate(" + this.translateWidth + "px, 0)"
      });
      this.slideNow++;
    }

    this.$slider
      .find(".slider__nav-btn")
      .removeClass("slider__nav-btn--active");
    this.$slider
      .find(".slider__nav-btn:eq(" + (this.slideNow - 1) + ")")
      .addClass("slider__nav-btn--active");
  }

  prevSlide() {
    if (
      this.slideNow == 1 ||
      this.slideNow <= 0 ||
      this.slideNow > this.slideCount
    ) {
      this.translateWidth = -this.$viewport.width() * (this.slideCount - 1);
      this.$slidewrapper.css({
        transform: "translate(" + this.translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + this.translateWidth + "px, 0)",
        "-ms-transform": "translate(" + this.translateWidth + "px, 0)"
      });
      this.slideNow = this.slideCount;
    } else {
      this.translateWidth = -this.$viewport.width() * (this.slideNow - 2);
      this.$slidewrapper.css({
        transform: "translate(" + this.translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + this.translateWidth + "px, 0)",
        "-ms-transform": "translate(" + this.translateWidth + "px, 0)"
      });
      this.slideNow--;
    }
    this.$slider
      .find(".slider__nav-btn")
      .removeClass("slider__nav-btn--active");
    this.$slider
      .find(".slider__nav-btn:eq(" + (this.slideNow - 1) + ")")
      .addClass("slider__nav-btn--active");
  }

  bindEventListeners() {
    this.$nextButton.click(() => {
      this.nextSlide();
    });

    this.$prevButton.click(() => {
      this.prevSlide();
    });

    this.$navButtons.click(() => {
      this.navBtnId = $(this).index();

      if (this.navBtnId + 1 != this.slideNow) {
        this.translateWidth = -this.$viewport.width() * this.navBtnId;
        this.$slidewrapper.css({
          transform: "translate(" + this.translateWidth + "px, 0)",
          "-webkit-transform": "translate(" + this.translateWidth + "px, 0)",
          "-ms-transform": "translate(" + this.translateWidth + "px, 0)"
        });
        this.slideNow = this.navBtnId + 1;
      }
    });
  }
}
export default Slider;
