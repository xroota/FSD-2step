import TextField from './text-field';

document.addEventListener('DOMContentLoaded', () => {
  const $textFields = $('.js-text-field.text-field.text-field--mask');

  $textFields.each(function () {
    new TextField($(this));
  });
});
