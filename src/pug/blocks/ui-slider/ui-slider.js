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