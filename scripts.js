/*
 * inputs
 */

const form = document.querySelector('form');

const email = document.getElementById('email');
const emailValidationMsg = document.getElementById('emailValidation');

const country = document.getElementById('country');
const countryValidationMsg = document.getElementById('countryValidation');

const zipCode = document.getElementById('zipCode');
const zipCodeValidationMsg = document.getElementById('zipCodeValidation');

const password = document.getElementById('password');
const passwordValidationMsg = document.getElementById('passwordValidation');

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmValidationMsg = document.getElementById('passwordConfirmValidation');

const submitBtn = document.getElementById('submitBtn');

const inputsGroup = [email, country, zipCode, password, passwordConfirm];

submitBtnStatus();

/*
 * events listener
 */

inputsGroup.map((input) => {
	input.addEventListener('input', (evt) => {
		submitBtnStatus();
		switch (evt.target.name) {
			case 'email':
				emailValidation();
				break;
			case 'country':
				countryValidation();
				break;
			case 'zipCode':
				zipCodeValidation();
				break;
			case 'password':
				passwordValidation();
				break;
			case 'passwordConfirm':
				passwordConfirmValidation();
				break;
		}
	});
});

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	console.warn('SUCCESS!');
});

/*
 * inputs validations
 */

function emailValidation() {
	if (!email.checkValidity()) {
		email.classList.add('invalid-input');
		emailValidationMsg.textContent = email.validationMessage;
		emailValidationMsg.classList.add('show-err-msg');
	} else {
		email.classList.remove('invalid-input');
		emailValidationMsg.textContent = '';
		emailValidationMsg.classList.remove('show-err-msg');
	}
}

function countryValidation() {
	if (!country.checkValidity()) {
		country.classList.add('invalid-input');
		countryValidationMsg.textContent = country.validationMessage;
		countryValidationMsg.classList.add('show-err-msg');
	} else {
		country.classList.remove('invalid-input');
		countryValidationMsg.textContent = '';
		countryValidationMsg.classList.remove('show-err-msg');
	}
}

function zipCodeValidation() {
	if (!zipCode.checkValidity()) {
		zipCode.classList.add('invalid-input');
		zipCodeValidationMsg.textContent = zipCode.validationMessage;
		zipCodeValidationMsg.classList.add('show-err-msg');
	} else {
		zipCode.classList.remove('invalid-input');
		zipCodeValidationMsg.textContent = '';
		zipCodeValidationMsg.classList.remove('show-err-msg');
	}
}

function passwordValidation() {
	if (!password.checkValidity()) {
		password.classList.add('invalid-input');
		passwordValidationMsg.textContent = password.validationMessage;
		passwordValidationMsg.classList.add('show-err-msg');
	} else {
		password.classList.remove('invalid-input');
		passwordValidationMsg.textContent = '';
		passwordValidationMsg.classList.remove('show-err-msg');
	}
}

function passwordConfirmValidation() {
	if (passwordConfirm.value !== password.value) {
		passwordConfirmValidationMsg.textContent = 'Confirm password does not match the password!';
		passwordConfirmValidationMsg.classList.add('show-err-msg');
		passwordConfirm.classList.add('invalid-input');
	} else {
		passwordConfirmValidationMsg.textContent = '';
		passwordConfirmValidationMsg.classList.remove('show-err-msg');
		passwordConfirm.classList.remove('invalid-input');
	}
}

function submitBtnStatus() {
	submitBtn.disabled = !form.checkValidity();
}
