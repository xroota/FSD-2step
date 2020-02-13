class Footer {
  constructor($elem) {
    this.$footer = $elem;
    this.media = matchMedia('(max-width: 1120px)');
    this.setTheme();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.media.addEventListener('change', this.setTheme.bind(this));
  }

  setTheme(footer) {
    console.log($(document).width());
    if ($(document).width() > 1120) {
      this.$footer.removeClass('footer--theme-light');
    } else {
      this.$footer.addClass('footer--theme-light');
    }
  }
}
export default Footer;
