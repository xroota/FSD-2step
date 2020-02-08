class Button{
    constructor ($element){
        this.$button = $element;
    }

    show() {
        this.$button.removeClass("button--hidden");
    }

    hide() {
        this.$button.addClass("button--hidden"); 
    }

    

    bindEventListener(type, fn) {
        this.$button.on(type, fn);

    }

}
export default Button;