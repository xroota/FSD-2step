import Footer from './footer';

document.addEventListener('DOMContentLoaded', () => {
  const $footers = $('.js-footer');

  $footers.each(function () {
    new Footer($(this));
  });
});
