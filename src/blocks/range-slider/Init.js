import DropDown from "./drop-down";
document.addEventListener("DOMContentLoaded", () => {
  const $dropDowns = $(".js-drop-down");

  $dropDowns.each(function() {
    new DropDown($(this));
  });
});
