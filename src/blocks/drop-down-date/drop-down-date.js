$(document).ready(function() {

  $(".calendar__datepicker").datepicker({
    
    onSelect: function onSelect(formattedDate, date, inst) {
      const val = formattedDate.split('-');
      $(inst.$el).closest(".drop-down-date").find("input:first").val(val[0]);
      $(inst.$el).closest(".drop-down-date").find("input:last").val(val[1]);


    }
  });

  $(".calendar__datepicker-short").datepicker({
    dateFormat: 'dd M',
    onSelect: function onSelect(formattedDate, date, inst) {
      const val = formattedDate.toLowerCase();
      $(inst.$el).closest(".drop-down-date").find("input").val((val)) ;


    }
  });


  $(".text-field__input-button").on("click", function() {
    $(this)
      .closest(".drop-down-date")
      .toggleClass("drop-down-date--menu-visible");
  });


  $(".button__clear").on("click", function() {
    $(this)
      .closest(".drop-down-date")
      .find("input")
      .val("");

  });

  $(".button__apply").on("click", function() {
    $(this)
      .closest(".drop-down-date")
      .toggleClass("drop-down-date--menu-visible");


      var myDatepicker = $($(this).closest(".calendar__datepicker-short")).datepicker().data('datepicker');
  });

});
