class CheckboxList {
  constructor(elem) {
    this.element = elem;
    console.log(333);
    this.handle = this.element.querySelector(".checkbox-list__button");

    if (this.handle) this.bindEventListeners();
  }

  bindEventListeners() {
    this.handle.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.element.classList.toggle("checkbox-list--menu-visible");
  }
}
export default CheckboxList;
