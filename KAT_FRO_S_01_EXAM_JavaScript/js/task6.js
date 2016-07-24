/**
 * Created by Jacek on 2016-01-12.
 */


document.addEventListener("DOMContentLoaded", function () {

	//Definiowanie pól i przycisku

	var form = document.querySelector("form");
	var button = document.querySelectorAll("form input"),
	email = button[1],
	haslo1 = button[2],
	haslo2 = button[3],
	select1 = document.querySelector("select option:first-child").value,
	error = document.querySelector(".error_message"),
	success = document.querySelector(".success_message");

	var checkMe = function (e) {
		e.preventDefault();
		error.innerText = "";

		//Funkcja do maila
		var emailCheck = function (arg) {
			if (arg.indexOf("@") >= 0 && arg.length > 5) {
				return true;
			} else {
				error.innerText += "Nieprawidłowa wartość pola email!\n";
				return false;
			}
		};
		//Funkcja do płci
		var sexCheck = function () {
			if (document.querySelector("select").value == select1) {
				error.innerText += "Nieprawidłowa wartość pola płeć!\n";
				return false;
			} else {
				return true;
			}
		};
		//Funkcja do hasła
		function passCheck(one, two) {
			if (one === two) {
				return true;
			} else {
				success.innerText += "Nieprawidłowa wartość pola hasło!\n";
				return false;
			}
		};
		passCheck(haslo1.value, haslo2.value);
		sexCheck();

		if (emailCheck(email.value) && sexCheck() && passCheck(haslo1.value, haslo2.value)) {
			success.innerText = "Rejestracja się powiodła!";
			return;
		}
	};

	form.addEventListener("submit", checkMe);

});
