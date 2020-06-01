import Pagination from './pagination';
import '../twbs-pagination/twbs-pagination';

document.addEventListener('DOMContentLoaded', () => {
  const $paginations = $('.js-pagination');

  $paginations.each(function () {
    new Pagination($(this));
  });
});
