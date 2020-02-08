import "inputmask/dist/jquery.inputmask.min";

class TextField {
  constructor($elem) {
    this.$textField = $elem;
    this.$menuButton = this.$textField.find(".js-text-field__input-button");
    this.$input = this.$textField.find(".js-text-field__input");
    
    if (this.$textField.hasClass("text-field--mask")) {
      
      this.setMask();
    }
  

  }

  bindEventMenuButtonClick(fn) {
    this.$menuButton.on("click",fn);

  }

  toggleMenu(){
    this.$textField.toggleClass("text-field--menu-visible");
  }

  setText(text) {
    console.log(text);
    this.$input.val(text);

  }

  setMask() {
    this.$textField.find("input")
    .inputmask({
      alias: "datetime",
      inputFormat: "dd.mm.yyyy",
      placeholder: "ДД.ММ.ГГГГ"
    });

  }
}
export default TextField;
