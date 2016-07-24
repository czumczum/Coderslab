/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {
	//Zbieramy wszystkie zmienne, które nam się przydarzą:
	var taskButton = document.querySelector('#taskInput')
		, submit = document.querySelector('#addTaskButton')
		, remove = document.querySelector('#removeFinishedTasksButton')
		, counter = document.querySelector('#counter');

	//Zerujemy licznik na wstępie:
	counter.innerText = 0;
	var count = 1; //Zmienna-licznik, nie ma nic wspólnego z tym powyżej

	//Dodawanie
	var addNext = function (e) {
		//Dodawanie do tablicy:
		var newLi = document.createElement("li");
		document.querySelector("#taskList").appendChild(newLi);
		newLi.setAttribute("id", count); //Nadaje id
		newLi.innerHTML = "<h2>" + taskButton.value + "</h2><button class='delete'>Delete</button> <button class='complete'>Complete</button>";
		counter.innerText = count; //Dodaje odpowiednią liczbę do tego zadania
		newLi.querySelector('.delete').addEventListener("click", removeMe);
		newLi.querySelector('.complete').addEventListener("click", toggleComplete);
		count++; //Przygotowane do dodania nowego
	};

	//Usuwanie
	var removeMe = function (e) {
		this.parentNode.parentNode.removeChild(this.parentNode);
		count-=2;
		counter.innerText = count;
		count++;
	};
	//Done
	var toggleComplete = function (e) {
		this.parentNode.classList.toggle('done');
	};

	//Remove finished
	var removeDone = function(e) {
		var toRemove = document.querySelectorAll('.done');
		for (var i = 0; i < toRemove.length; i++) {
			toRemove[i].parentNode.removeChild(toRemove[i]);
			count-=2;
		counter.innerText = count;
		count++;
		}
	}

	submit.addEventListener("click", addNext);
	remove.addEventListener("click", removeDone);

});
