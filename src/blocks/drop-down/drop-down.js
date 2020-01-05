function sumGuests(items) {
  $(".drop-down__items").each(function() {
    let sum = 0;
    $(this)
      .find(".drop-down__item-input")
      .each(function() {
        sum +=  parseInt($(this).val());
      });
    if (sum > 0) {
      $(this)
        .closest(".drop-down")
        .find(".text-field__input")
        .val(sum + " гостей");
    }
    else {
      {
        $(this)
          .closest(".drop-down")
          .find(".text-field__input")
          .val("Сколько гостей");
      }

    }
  });
}

$(document).ready(function() {
  sumGuests();

  $(".drop-down__item-input")
    .filter(function() {
      if (this.value === "0") return true;
    })
    .siblings(".drop-down__item-button")
    .filter(function() {
      if ($(this).text() == "-") return true;
    })
    .addClass("drop-down__item-button--hidden ");

  $(".text-field__input-button").on("click", function() {
    $(this)
      .closest(".drop-down")
      .toggleClass("drop-down--menu-visible");
    $(this)
      .closest(".text-field")
      .toggleClass("text-field--menu-visible");
  });

  $(".drop-down__item-button").on("click", function() {
    let $input = $(this).siblings(".drop-down__item-input");
    let button = $(this).text();

    val = parseInt($input.val());

    if ($(this).text() == "-") {
      $input.val(val - 1);
      $input.attr("value", val - 1);
      if (val - 1 === 0) {
        $(this).addClass("drop-down__item-button--hidden ");
      }
    } else {
      $input.val(val + 1);
      $input.attr("value", val + 1);
      $input
        .siblings(".drop-down__item-button")
        .removeClass("drop-down__item-button--hidden ");
    }

    $input.change();
    sumGuests();

    return false;
  });
});
