document.addEventListener("DOMContentLoaded", function () {

	var sample = document.querySelectorAll(".sample_class");
	for (var i = 0; i < sample.length; i++) {
		console.log(sample[i]);
	};

	document.querySelector("#sample_id").classList.add("exercise_2");

	var exc3 = document.querySelector(".sample_class_2").children[0].children;
	for (var i = 0; i < exc3.length; i++) {
		console.log(exc3[i].innerText);
	};

	var exc4 = document.querySelectorAll("a");
	for (var i = 0; i < exc4.length; i++) {
		console.log(exc4[i].href);
	};

	var exc5 = document.querySelector(".sample_class_3").children;
	for (var i = 0; i < exc5.length; i++) {
		exc5[i].innerText = "Jestem " + i + " dzieckiem";
	};

});
