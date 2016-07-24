/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

	var tooltips = document.querySelectorAll('.tooltip');

	var showMe = function (e) {
		this.innerHTML += '<span class="tooltipText">' + this.dataset.text + '</span>';
		};

	var hideMe = function (e) {
		this.removeChild(this.children[0]);
		};

	for (var i = 0; i < tooltips.length; i++) {
		tooltips[i].addEventListener("mouseover", showMe);
		tooltips[i].addEventListener("mouseout", hideMe);
	};


});


/*
 <span class="tooltipText">Text tooltipa</span>
 */
