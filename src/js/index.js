// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import '../pug/blocks/ui-slider/ui-slider'
  

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
