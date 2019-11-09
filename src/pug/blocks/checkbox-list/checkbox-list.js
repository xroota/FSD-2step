$(document).ready(function() {

  
    $('.checkbox-list__button').on('click', function () {
      
      $(this).closest('.checkbox-list').toggleClass('checkbox-list--menu-visible');

    });
    
    });