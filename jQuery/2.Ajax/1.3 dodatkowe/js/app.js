$(function () {

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
		})
	};

	/* Insert Movies to DOM  */
	function insertContent(movies) {
		$.each(movies, function (index, movie) {
			var li = $('<li>'); //Tutaj będzie cały film
			
			//Tytuł i opis
			var h3 = $('<h3>').text(movie.title);
			var span = $('<span>').addClass('movie_description').text(movie.description);
			

			li.append(h3);
			li.append(span);

			movieLists.append(li)
		});
	};

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
	};
	loadMovies();

	var addMovie = function (title, description) {
		var titleNew = title;
		console.log(titleNew);
		var descr = description;
		console.log(descr);
		var item = {
			title: titleNew
			, description: descr
		};
		$.post(movieUrl, JSON.stringify(item)).done(function (msg) {
			$('.alert').text(msg);
		}).error(function (error) {
			console.log('Error: ' + error);
		})
		reload();
	};
	
	var validate = function(e) {
		e.preventDefault();
		var titleNew = $('.get_title').val();
		var descr = $('.get_description').val();
		var titleVal = function(title) {
			if (title.length >= 10 && title.length <= 40) {
				return true
			}
			return false
		};
		var descrVal = function(description) {
			if (description.length <= 200) {
				return true
			}
			return false
		};
		if (titleVal(titleNew) && descrVal(descr)) {
			$('form').hide();
			$('.alert').removeClass('invisible').removeClass('alert-danger').addClass('alert-success').text('Operacja się powiodła!');
			return addMovie(titleNew, descr);
		}
		return $('.alert').removeClass('invisible').addClass('alert-danger').text('Nieprawidłowa długość wpisów w polu tytuł lub opis');
		}
	
	
	var sub = $('.add_movie').on("submit", validate);

});