// strating with declaring variables to get form elements
const form = document.getElementById('form');
const personName = document.getElementById('personname');
const email = document.getElementById('email');
const textArea = document.getElementById('textarea')


//defining a function for form input validation checks
function validationCheck() {
	
	// declaring variables to get form elements values
	const personNameValue = personName.value;
	const emailValue = email.value;
	const textAreaValue = textArea.value;

    //adding function to check form validation
	if(personNameValue === '') {
        //adding function to check inout type errors
		checkError(personName, 'Enter you name to proceed.');
	} else {
        //adding function if there's no error
		checkValidation(personName);
	}
    // adding function to check email type errors
	if(emailValue === '') {
        //adding function to check input type errors
		checkError(email, 'Enter your email to proceed.');
	} else if (!isEmail(emailValue)) {
        //adding function to check input type errors
		checkError(email, 'Enter a valid email.');
	} else {
        //adding function if there's no error
		checkValidation(email);
	}
	if(textAreaValue === '') {
        //adding function to check input type errors
		checkError(textAreaValue, 'Enter your comments.');
	} else {
        //adding function if there's no error
		checkValidation(textAreaValue);
	}
}

//defining function to check input type errors
function checkError(i, message) {
	const subForm = i.parentElement;
	const small = subForm.querySelector('small');
	subForm.className = 'sub-form invalid';
	small.innerText = message;
}
//defining function if there's no error
function checkValidation(i) {
	const subForm = i.parentElement;
	subForm.className = 'sub-form valid';
}
//defining function to check email type errors
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

// adding event listener to form section
form.addEventListener('submit', event => {
	event.preventDefault();
	
	validationCheck();
});

