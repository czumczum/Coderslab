$(document).ready(function () {
	var next = $('#nextPicture')
		, prev = $('#prevPicture')
		, img = $('li')
		, index = 1
		, width = 400
		, ul = $('ul')
		, left = 0,
		last = img.last(),
		dotts = $('#dotts');
	var first = img.first().clone();
	var last = img.last().clone();
	img.parent().append(first);
	img.parent().prepend(last);
	var ulWidth = width * img.length;
	ul.css('width', ulWidth);
	img = $('li');
	console.log(img);
	
	//Adding dots
	$.each(img, function() {
		var dot = $('<li><a>*</a></li>');
		dot.appendTo(dotts);
		var idEl = $.inArray(this, img);
		left = -(idEl * width);
		console.log(left);
		});
	$('li a').first().css('display', 'none');
	$('li a').last().css('display', 'none');
	var prevSlide = function (e) {
		dotts.find('li').removeClass('current');
		index--;
		if (index >= 1) {
			left = -(index * width);
			console.log(left);
			ul.animate({left: left + 'px'}, 800);
			dotts.find('li').eq(index).addClass('current');
		}
		else {
			left = -(index * width);
			console.log(left)
			ul.animate({left: left + 'px'}, 800).animate({left: -2400 + 'px'}, 1);
		
			index = img.length - 2;
			console.log(index);
			dotts.find('li').eq(index).addClass('current');
		}
	};
	
	var nextSlide = function (e) {
		dotts.find('li').removeClass('current');
		index++;
		if (index < img.length - 1) {
			left = -(index * width);
			ul.animate({left: left + 'px'}, 800);
			dotts.find('li').eq(index).addClass('current');
		} else {
			left = -(index * width);
			ul.animate({left: left + 'px'}, 800).animate({left: -400 + 'px'}, 1);
			index = 1;
			dotts.find('li').eq(index).addClass('current');
		}
	};
	var dots = $('#dotts').find('li');
	dots.on("click", function(e) {
		dots.removeClass('current');
		var indx = $.inArray(this, dots);
		left = -(indx * width);
		ul.animate({left: left + 'px'}, 800);
		$(this).addClass('current');
		return index = indx
		})
	prev.on('click', prevSlide);
	next.on('click', nextSlide);
	//Keydown - nawigacja strzałkami
	$("body").keydown(function (e) {
		if (e.keyCode == 37) { // left
			prevSlide()
		} else if (e.keyCode == 39) { // right
			nextSlide();
		}
	})
});