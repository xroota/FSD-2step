$(document).ready(function() {

  
    $('.text-field__input-button').on('click', function () {
      
      $(this).closest('.drop-down').toggleClass('drop-down--menu-visible');
      $(this).closest('.text-field').toggleClass('text-field--menu-visible');

    });
    
    });