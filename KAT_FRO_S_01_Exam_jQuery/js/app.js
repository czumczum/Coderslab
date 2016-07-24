$(function () {

	var form = $('#contactForm'),
		name = $('#name'),
		lastname = $('#surname'),
		mail = $('#address'),
		alert = $('.alert'),
		sbmt = $('input[type="submit"]');
	//variables for url
	var sendUrl = 'http://api.coderslab.pl/register';


	var addMe = function (name, lastname, email) {
		var name = name;
		var lastname = lastname;
		console.log(name, lastname);
		var email = email;
		console.log(email);
		var item = {
			name: name, surname: lastname, address: email
		};
		$.post(sendUrl, JSON.stringify(item)).done(function (msg) {
			alert.text(msg);
			console.log('wysłane dane');
		}).error(function (error) {
			error.text(error)
			alert.log('Error: ' + error);
		})
	};

	var validate = function(e) {
		var error = ""
		e.preventDefault();
		var userName = name.val();
		var userMail = mail.val();
		var userLast = lastname.val();
		var nameVal = function(name) {
			if (name.length >= 3) {
				return true
			}
			error = "Nieprawidłowa długość imienia lub nazwiska";
			return false
		};
		var emailVal = function(email) {
			if (email.length >= 5) {
				return true
			}
			error = "\nBłędny email";
			return false
		};
		if (nameVal(userName) && nameVal(userLast) && emailVal(userMail)) {
			form.css('display', 'none');
			alert.removeClass('alert-danger').addClass('alert-success');
			return addMe(userName, userLast, userMail);
		}
		alert.addClass('alert-danger');
		return alert.text(error);
		}


	form.on("submit", validate);

});
