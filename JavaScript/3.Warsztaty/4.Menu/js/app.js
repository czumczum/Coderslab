/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

	var lis = document.querySelectorAll('.nav>ul>li');

	var showMe = function (e) {
		if (this.firstElementChild) {
		this.firstElementChild.style.display = "inline-block";
		}
	};
	var hideMe = function (e) {
		if (this.firstElementChild) {
		this.firstElementChild.style.display = "none";
		}
	};

	for (var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("mouseover", showMe);
		lis[i].addEventListener("mouseout", hideMe);
	};


});

