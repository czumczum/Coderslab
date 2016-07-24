$(function () {

	var tabs = $('.tabs li');
	var divs = $('.tabs div');
	$.each(tabs, function(i, val) {
		$(this).attr('class', i);
	});
	$.each(divs, function(i, val) {
		$(this).attr('class', i);
	});
	divs.hide();
	
	var show = function() {
		console.log($(this));
		console.log($(this).attr('class'));
		var idEl = $(this).attr('class');
		console.log(idEl);
		console.log(divs.eq(idEl));
		if(divs.eq(idEl).is(':hidden')) {
			divs.fadeOut('fast');
			divs.eq(idEl).delay(300).fadeIn('slow');
		} else {
			divs.fadeOut('fast');
		}
	};

	tabs.on("click", show);

});