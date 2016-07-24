/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

	var imgs = document.querySelectorAll('#gallery img');
	var show = document.querySelector('#showButton');
	var hide = document.querySelector('#hideButton');
	var inputTag = document.querySelector('#tagInput');

	var tagMe = function (e) {
		var tagi = ""
		tag = inputTag.value;
		inputTag.value = "";
		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].dataset.tag.indexOf(tag) < 0) {
				imgs[i].classList.add('invisible');
			} else {
				imgs[i].classList.remove('invisible');
			}
		}
	};


	show.addEventListener("click", tagMe);
	hide.addEventListener("click", function(e) {
		for (var i = 0; i < imgs.length; i++) {
				imgs[i].classList.add('invisible');
		}
	});

});

