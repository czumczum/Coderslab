$(function () {

	var form = $('#contactForm'),
		name = $('#nameInput'),
		mail = $('#emailInput'),
		msg = $('#messageInput'),
		error = $('.error'),
		sbmt = $('input[type="submit"]');
	//variables for url
	var sendUrl = 'http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl';


	var addMe = function (name, email, msg) {
		var name = name;
		console.log(name);
		var email = email;
		console.log(email);
		var msg = msg;
		console.log(msg);
		var item = {
			name: name, email: email, message: msg
		};
		$.post(sendUrl, JSON.stringify(item)).done(function (msg) {
			$('.error').text(msg);
		}).error(function (error) {
			console.log('Error: ' + error);
		})
	};
	
	var validate = function(e) {
		e.preventDefault();
		var userName = name.val();
		var userMail = mail.val();
		var message = msg.val();
		var nameVal = function(name) {
			if (name.length >= 5) {
				return true
			}
			console.log('name not ok');
			return false
		};
		var msgVal = function(msg) {
			if (msg.length >= 10) {
				return true
			}
			console.log('message not ok');
			return false
		};
		var emailVal = function(email) {
			if (email.indexOf('@') >= 0) {
				return true
			}
			console.log('email not ok');
			return false
		};
		if (nameVal(userName) && msgVal(message) && emailVal(userMail)) {
			console.log('ok');
			return addMe(userName, userMail, message);
		}
		return console.log('not ok');
		}
	
	
	form.on("submit", validate);

});