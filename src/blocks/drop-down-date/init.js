import DropDownDate from './drop-down-date';

document.addEventListener('DOMContentLoaded', () => {
  const $dropDowns = $('.js-drop-down-date');

  $dropDowns.each(function () {
    new DropDownDate($(this));
  });
});
