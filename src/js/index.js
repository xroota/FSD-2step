// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
$( function() {
    $( "#slider" ).slider({
		min: 0,
		max: 15000,
		values: [5000,10000],
		range: true,
	stop: function(event, ui) {
		jQuery("div.range-slider__header-value").text(jQuery("#slider").slider("values",0)  + "₽ -" + jQuery("#slider").slider("values",1) + "₽");

    },
    slide: function(event, ui){
		jQuery("div.range-slider__header-value").text(jQuery("#slider").slider("values",0) + "₽ -" + jQuery("#slider").slider("values",1) + "₽");
    }
	});
  } );
  

require('twbs-pagination'); 
require('popper.js');
require('bootstrap');



$(function () {
	window.pagObj = $('#pagination').twbsPagination({
		next: 'arrow_forward',
        last: '15',
		totalPages: 15,
		visiblePages: 4,
		onPageClick: function (event, page) {
			console.info(page + ' (from options)');
		}
	}).on('page', function (event, page) {
		jQuery("ul.pagination li:nth-child(6) a").text("...");
		jQuery("ul.pagination li:nth-child(6)").addClass("disabled");
		if (page==15) {
			jQuery("ul.pagination li:nth-child(6) ").removeClass("active");
			jQuery("ul.pagination li.last").removeClass("disabled");
			jQuery("ul.pagination li.last").addClass("active");
		}
		console.info(page + ' (from event listening)');
	});
});
