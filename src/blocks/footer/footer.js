$(document).ready(function(jQery) {
  const footers = $(".footer");

  const media = matchMedia("(max-width: 1120px)");

  media.addEventListener("change", setCreative);

  function setCreative(e) {
    footers.toggleClass("footer--theme-light");
  }
});
