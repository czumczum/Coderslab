$(document).ready(function() {

	var scene = $('.scene');
	var element = $('.element');
	var oldCordX = 0;
	var oldCordY = 0;
	
	var startPosition = function(e) {
		oldCordY = e.offsetY;
		oldCordX = e.offsetX;
		$.each(element, function() {
			var z = $(this).data('z');
			var left = $(this).data('x');
			var top = $(this).data('y');
//			oldCordX = $(this).data('x');
//			oldCordY = $(this).data('y');
			$(this).css('z-index', z).css('left', left).css('top', top);
		});
	
	};
	
	var followMe = function(e) {
		var cordY = e.offsetY;
		var cordX = e.offsetX
		var moveX = oldCordX - cordX;
		var moveY = oldCordY - cordY;
		$.each(element, function() {
//			if(e.target == $(this).offset()) {
//				console.log('kolizja')
//			} else {
			var speed = $(this).data('speed');
			var leftCo = (parseInt($(this).css('left')) + moveX) * speed;
			var topCo = (parseInt($(this).css('top')) + moveY) * speed;
			$(this).css('left', leftCo).css('top', topCo);
		})
		
	};	
	
	scene.on('mouseenter', startPosition);
	scene.on('mousemove', followMe);

});