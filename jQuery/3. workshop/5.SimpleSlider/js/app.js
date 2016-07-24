$(document).ready(function () {

	var next = $('#nextPicture'),
		prev = $('#prevPicture'),
		img = $('li'),
		index = 0,
		width = 404,
		ul = $('ul'),
		left = 0;
	
	var ulWidth = width * img.length;
	ul.css('width', ulWidth);
	
	prev.on('click', function(e) {
		index--;
		if (index >= 0) {
			left += width;
			ul.css('left', left + 'px')
		} else {
			index = 0;
		}
	});
	next.on('click', function(e) {
		index++;
		if (index < img.length - 1) {
			left -= width;
			ul.css('left', left + 'px');
		} else {
			index = img.length - 2;
		}
	});
});