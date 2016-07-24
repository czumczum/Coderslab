/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

	var imgs = document.querySelectorAll('li');
	var prev = document.querySelector('#prevPicture');
	var next = document.querySelector('#nextPicture');
	var index = 0;

	imgs[index].classList.add('visible');

	var change = function (e) {
		imgs[index].classList.remove('visible');

		if (this == prev) {
			index -= 1;
		} else if (this == next) {
			index += 1;
		};

		if (index == imgs.length) {
			index = 0;
		} else if (index < 0) {
			index = imgs.length - 1;
		}
		imgs[index].classList.add('visible');
	};
	prev.addEventListener("click", change);
	next.addEventListener("click", change);
});
