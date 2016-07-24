/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

	var imgs = document.querySelectorAll('li');
	var big = document.querySelector('.fullScreen img');
	var bigDiv = document.querySelector('.fullScreen');

	var superSize = function (e) {
		var source = this.querySelector('img').src;
		big.src = source;
		bigDiv.classList.remove('hidden');
		var h = window.innerHeight;
		if (h < big.height) {
			big.style.width = (h / big.height) * big.width + "px"
			big.style.height = h + 'px';
		};
	};
	var resize = function(e) {
		var h = window.innerHeight;
		big.style.width = (h / big.height) * big.width + "px"
		big.style.height = h + 'px';
	};

	for (var i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener("click", superSize)
	};

	big.addEventListener("click", function(e) {
		this.parentElement.classList.add("hidden");
	});
	window.addEventListener("resize", resize);

});

