$(document).ready(function() {

	var element = $('#box1');
	var widthNew = parseInt(element.css('width')) * 2;
	var heightNew = parseInt(element.css('height')) * 2;
	var leftNew = parseInt(element.css('left')) + 100;
	var topNew = parseInt(element.css('top')) + 50;
	element.delay(2000).animate({width: widthNew + "px", height: heightNew + "px"}, 1000).animate({left: leftNew + "px", top: topNew + "px"}, 5000);

});
