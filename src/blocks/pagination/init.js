import Pagination from "./pagination";
document.addEventListener("DOMContentLoaded", () => {
  const $paginations = $(".js-pagination");

  $paginations.each(function() {
    new Pagination($(this));
  });
});
