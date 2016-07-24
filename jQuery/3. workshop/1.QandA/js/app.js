$(document).ready(function () {

	var questions = $('h1');
	var answers = $('p');
	
	var answ = function() {
		if ($(this).next().is(':hidden')) {
			answers.slideUp('fast');
			$(this).next().slideDown('fast');
		} else {
			answers.slideUp();
		}
	};
	
	questions.on("click", answ)

});