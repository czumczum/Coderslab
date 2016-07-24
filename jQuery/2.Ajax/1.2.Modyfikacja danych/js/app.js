$(function () {

	//	Zadanie 1.

	$.support.cors = true;
	//variables for main ul list
	var movieLists = $('ul.repertuar');
	//variables for url
	var movieUrl = 'http://api.coderslab.pl/movies';

	//Reload function

	var reload = function () {
		$.ajax({
			url: movieUrl
		}).done(function (response) {
			movieLists.empty(); //Czyści div z poprzednim wywołaniem (dane filmów)
			insertContent(response); //Znowu pobiera dane z serwera
		}).error(function (error) {
			console.log(error);
		});
	}

	/* Insert Movies to DOM  */
	function insertContent(movies) {
		$.each(movies, function (index, movie) {
			var li = $('<li>'); //Tutaj będzie cały film
			
			//Tytuł i opis
			var h3 = $('<h3>').text(movie.title);
			var span = $('<span>').addClass('movie_description').text(movie.description);
			
			//Daty wyświetleń
			var screen = movie.screenings;
			var dates = $('<ul>').addClass('seans').text('Seanse:');
			$.each(screen, function(index, val) {
				$('<li>').text(" " + val.screening_date).appendTo(dates);		
			});
			
			//Przyciski usuwanie/edycja/seanse
			var del = $('<button>').text('Usuń').addClass('removeMovie btn').attr('id', movie.id);
			del.on('click', function () {
				remove($(this));
			});
			var edt = $('<button>').text('Edytuj').addClass('updateMovie btn').attr('id', movie.id);
			edt.on('click', function () {
				updateMovie($(this));
			});
			var screenEdt = $('<button>').text('Edytuj/Dodaj seanse').addClass('seans btn').attr('id', movie.id);
			screenEdt.on('click', function () {
				addScreenings($(this));
			});

			li.append(h3);
			li.append(span);
			li.append(dates);
			li.append(del);
			li.append(edt);
			li.append(screenEdt);

			movieLists.append(li)
		});
	}

	/* Load movies and insert them into the DOM
	 */
	function loadMovies() {
		$.ajax({
			url: movieUrl
		}).done(function (response) {
			insertContent(response)
		}).fail(function (error) {
			console.log(error)
		})
	}
	loadMovies();

	//	Zadanie 2.

	var addMovie = function (e) {
		e.preventDefault();
		var titleNew = $('.get_title').val();
		var descr = $('.get_description').val();
		var item = {
			title: titleNew
			, description: descr
		};
		$.post(movieUrl, JSON.stringify(item)).error(function (error) {
			console.log('Error: ' + error);
		})
		reload();
	};
	var sub = $('.add_movie').on("submit", addMovie);
	var edit = $('#updateMovie').on("click", function(e) {
		e.preventDefault();
		$('.updateMovie').css("display", "inline-block");
	})

	//	Zadanie 3.
	var remove = function (el) {
		let idEl = el.attr('id');
		var urlDel = 'http://api.coderslab.pl/movies/' + idEl;
		$.ajax({
			url: urlDel
			, type: 'DELETE'
		, }).done(function (response) {
			console.log(response);
			reload();
		}).fail(function (error) {
			console.log(error)
		})
	};
	
//	Zadanie 4.
	var updateMovie = function(el) {
		var idEl = el.attr('id');
		
		//Zmiana ajax
		var change = function (el) {
			var titleNew = el.parent().find('h3').text();
			console.log(titleNew);
			var descr = el.parent().find('span').text();
			console.log(descr);
			$.ajax({
				url: movieUrl + "/" + idEl,
				dataType: 'json',
				type: 'PUT',
				data: JSON.stringify({title: titleNew, description: descr})
			}).done(function (response) {
				console.log(response);
				reload();
			}).error(function (error) {
				console.log(error);
			});
		};
		if (el.parent().find('h3').hasClass('editable')) {
			el.parent().find('h3').removeClass('editable').attr("contenteditable", "false");
			el.parent().find('span').removeClass('editable').attr("contenteditable", "false");
			el.text("Edytuj").removeClass('editable');
			
			//Jeżeli rodzic buttona ma klasę editable (czyli jest biały i modyfikowalny), to kolejne przyciśnięcie na "Zatwierdź" wysyła pobrane dane do ajaxa
			change(el);
		} else {
			el.parent().find('h3').addClass('editable').attr("contenteditable", "true");
			el.parent().find('span').addClass('editable').attr("contenteditable", "true");
			el.text("Zatwierdź").toggleClass('editable');
			}
	};
	
//	Zadanie 5.
	var addScreenings = function(el) {
		var titleNew = el.parent().find('h3').text();
			var descr = el.parent().find('span').text();
		var idEl = el.attr('id');
		var screenDates = el.parent().find('ul li');
		var dates = [];
		if (!el.hasClass('editable')) {	
			
			screenDates.prop('contenteditable', 'true').addClass('editable');
			el.addClass('editable');
			el.text('Zatwierdź');
			var input = $('<input>').appendTo(el.parent());
		} else {
			//Każdy element już istniejący zostaje pobrany i przypisywany jest do tablicy jako obiekt
			$.each(screenDates, function(i, valDate) {
				var date = $(this).text();
				dates.push({screening_date: date});
			});
			//Pobranie tekstu z nowego inputa
			var newOne = el.parent().find('input').val();
			dates.push({screening_date: newOne});
			console.log(dates);
			
			//Wraca wizualnie do stanu poprzedniego
			el.removeClass('editable');
			el.text('Edytuj/Dodaj seanse');
			screenDates.prop('contenteditable', 'false').removeClass('editable');
			
			$.ajax({
				url: movieUrl + "/" + idEl,
				dataType: 'json',
				type: 'PUT',
				data: JSON.stringify({title: titleNew, description: descr, screenings: dates})
			}).done(function (response) {
				el.parent().find('input').remove();
				reload();
			}).error(function (error) {
				console.log(error);
			});
	}
		
	};

});