$(document).ready(function () {

	var bar1 = $('#bar1 span'),
		bar2 = $('#bar2 span'),
		bar3 = $('#bar3 span'),
		btn1 = $('.bar1'), //pierwsze butony
		btn2 = $('.bar2'), //drugie
		btn3 = $('.bar3'); //trzecie
	
	var progress = function(e) {
		console.log($(this));
		var color = $(this).data('color');
		var width = $(this).data('progress');
		if ($.inArray(this, btn1) >= 0) {
			var thisBar = bar1;
		} else if ($.inArray(this, btn2)  >= 0) {
			var thisBar = bar2;
		} else {
			var thisBar = bar3;
		};
		thisBar.attr("class", color).css('width', width);
	};
	
	$('.changeBar').on('click', progress);
	
});