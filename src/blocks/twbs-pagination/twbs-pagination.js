require('twbs-pagination'); 
require('popper.js');
require('bootstrap');


$(document).ready(function() {
	jQuery("ul.pagination li a").html("...");
});

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

$(document).ready(function() {
	jQuery("ul.pagination li:nth-child(6) a").text("...");
});

