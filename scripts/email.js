const name = document.getElementById('name'),
	  email = document.getElementById('email'),
	  message = document.getElementById('message'),
	  form = document.getElementById('contact-form'),
	  infoText = document.getElementById('infoText-name'),
		formGroup = document.querySelector('.form-group'),
		fieldIcon = document.querySelector('.form-icon');

const inputsArray = [name, email, message];

inputsArray.forEach(input => input.addEventListener('focus', () => {
	input.nextElementSibling.classList.add('active');
}));

inputsArray.forEach(input => input.addEventListener('blur', () => {
	if(input.value !== '') return true;
	else { input.nextElementSibling.classList.remove('active'); }
}));

// check if inputs are correctly filled
function validateInputs() {
	const nameValue = name.value.trim(),
				emailValue = email.value.trim(),
				messageValue = message.value.trim();

	// Check name input:
	if(nameValue === '') { invalidInput(name); }	
	else { validInput(name);}

	// Check email input
	const regexp = /^[\w.-]+@[\w.-]+\.[a-z]{2,3}$/ig;

	if(!regexp.test(emailValue)) { invalidInput(email); }	
	else { validInput(email); }

	// Check message input
	if(messageValue === '') { invalidInput(message); }	
	else { validInput(message);}

	// If there is no errors in array, we can send the form...
	const validFields = inputsArray.map(input => input.classList.contains('valid') ? true : false);
	const validFieldsLength = validFields.filter(el => el === true).length;

	if(validFieldsLength === 3) { sendForm(); }
}

function validInput(field) {
	field.className = field === message ? 'form-field form-field--textarea valid' : 'form-field valid';
	field.previousElementSibling.className = 'form-icon icofont-check valid';
}

function invalidInput(field) {
	field.className = field === message ? 'form-field form-field--textarea invalid' : 'form-field invalid';
	field.previousElementSibling.className = 'form-icon icofont-error invalid';
}

function resetForm() {
	inputsArray.forEach(input => {
		input.value = '';
		input.classList.remove('valid');
		input.classList.remove('invalid');
		input.nextElementSibling.classList.remove('active');
		input.previousElementSibling.className = 'form-icon';
	});
}

function sendForm() {

	// extension email.js code

    var myform = $("form#contact-form");
        // event.preventDefault();

        var params = myform.serializeArray().reduce(function(obj, item) {
         obj[item.name] = item.value;
         return obj;
      }, {});

      // Change to your service ID, or keep using the default service
      var service_id = "default_service";

      var template_id = "contact_form";
      myform.find("button").text("Proszę czekać...");
      emailjs.send(service_id, template_id, params)
        .then(function(){ 
           alert("Wiadomość wysłana pomyślnie!");
           myform.find("button").text("Wyślij");
           	// clear fields after sending form
						resetForm();
         }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });

      return false;
};


form.addEventListener('submit', (e) => {
	e.preventDefault();
	// validate fields
	validateInputs();
});
