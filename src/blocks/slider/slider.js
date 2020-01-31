var slideNow = 0;
var slideCount = $(".slider__slidewrapper").children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
  $(".slider__next-btn").click(function() {
    nextSlide($(this));
  });

  $(".slider__prev-btn").click(function() {
    prevSlide($(this));
  });

  $(".slide-nav-btn").click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$(".slider__viewport").width() * navBtnId;
      $(".slider__slidewrapper").css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
      slideNow = navBtnId + 1;
    }
  });
});

function nextSlide(item) {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $(item)
      .closest(".slider")
      .find(".slider__slidewrapper")
      .css("transform", "translate(0, 0)");
    slideNow = 1;
  } else {
    translateWidth =
      -$(item)
        .closest(".slider")
        .find(".slider__viewport")
        .width() * slideNow;
    $(item)
      .closest(".slider")
      .find(".slider__slidewrapper")
      .css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
    slideNow++;

    console.log(slideNow);
  }

  $(item)
    .closest(".slider")
    .find(".slider__nav-btn")
    .removeClass("slider__nav-btn--active");
  $(item)
    .closest(".slider")
    .find(".slider__nav-btn:eq(" + (slideNow - 1) + ")")
    .addClass("slider__nav-btn--active");
}

function prevSlide(item) {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth =
      -$(item)
        .closest(".slider")
        .find(".slider__viewport")
        .width() *
      (slideCount - 1);
    $(item)
      .closest(".slider")
      .find(".slider__slidewrapper")
      .css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
    slideNow = slideCount;
  } else {
    translateWidth =
      -$(item)
        .closest(".slider")
        .find(".slider__viewport")
        .width() *
      (slideNow - 2);
    $(item)
      .closest(".slider")
      .find(".slider__slidewrapper")
      .css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
    slideNow--;
  }
  $(item)
    .closest(".slider")
    .find(".slider__nav-btn")
    .removeClass("slider__nav-btn--active");
  $(item)
    .closest(".slider")
    .find(".slider__nav-btn:eq(" + (slideNow - 1) + ")")
    .addClass("slider__nav-btn--active");
}
