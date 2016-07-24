document.addEventListener("DOMContentLoaded", function () {

	var divs = document.querySelectorAll(".box");
	var span = document.querySelector("span");

	var superSize = function (e) {
		var size = parseInt(this.dataset.size);
		var oldsize = this.clientWidth;
		this.style.width = oldsize + size + 'px';
		this.style.height = oldsize + size + 'px';
	};
	var minimize = function (e) {
		var size = parseInt(this.dataset.size);
		var oldsize = this.clientWidth;
		this.style.width = oldsize - size + 'px';
		this.style.height = oldsize - size + 'px';
	};
	var showMeId = function (e) {
		var id = this.id;
		span.innerText = id;
	};


	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener("mouseout", minimize);
		divs[i].addEventListener("mouseover", showMeId);
		divs[i].addEventListener("mouseover", superSize);
	};


});
