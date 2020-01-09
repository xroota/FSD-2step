function sumGuests(items) {
  $(".drop-down__items").each(function() {
    let sum = 0;
    let sumCount = {};
    let sumTypes = JSON.parse(
      $(this)
        .closest(".drop-down")
        .attr("data-sumTypes")
    );

    $(this)
      .find(".drop-down__item-input")
      .each(function() {
        symType = $(this).attr("data-sumtype");
        let num = parseInt($(this).val());
        sum = sum + num;
        sumCount[symType] =
          sumCount[symType] === undefined ? 0 + num : sumCount[symType] + num;
      });


    if (sum > 0) {
      let text = "";
      let numKeys= 0;
      for (key in sumCount) {
        let num=sumCount[key];
        let tmp=0;
        if (num > 1) {
          tmp = 1
        }
        if (num > 5) {
          tmp = 2
        }

        if ((num > 0) && (numKeys <= 2)) {

          numKeys=numKeys+1;
          if (numKeys === 2) 
          {text =  text + " , ";} 

          text = text + sumCount[key] + " " +  sumTypes[key][tmp];


        
        
        }
        console.log(numKeys);

        if (numKeys === 3) {
          text = text + '...';
          
        }
      }

      $(this)
        .closest(".drop-down")
        .find(".text-field__input")
        .val(text);
      $(this)
        .closest(".drop-down")
        .find(".button__clear")
        .removeClass("drop-down__item-button--hidden ");
    } else {
      {
        let defaultPlaceholder = $(this)
          .closest(".drop-down")
          .attr("data-defaultPlaceholdrer");
        $(this)
          .closest(".drop-down")
          .find(".text-field__input")
          .val(defaultPlaceholder);
        $(this)
          .closest(".drop-down")
          .find(".button__clear")
          .addClass("drop-down__item-button--hidden ");
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

  $(".button__clear").on("click", function() {
    $(this)
      .closest(".drop-down")
      .find(".drop-down__item-input")
      .val("0");

    $(this)
      .closest(".drop-down")
      .find(".drop-down__item-button")
      .filter(function() {
        if ($(this).text() == "-") return true;
      })
      .addClass("drop-down__item-button--hidden ");
    sumGuests();
  });

  $(".button__apply").on("click", function() {
    $(this)
      .closest(".drop-down")
      .toggleClass("drop-down--menu-visible");
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
