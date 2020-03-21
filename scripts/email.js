const name = document.getElementById('name'),
	  email = document.getElementById('email'),
	  message = document.getElementById('message'),
	  form = document.getElementById('contact-form'),
	  infoText = document.getElementById('infoText-name'),
	  formGroup = document.querySelector('.form-group');

const inputsArray = [name, email, message];

inputsArray.forEach(input => input.addEventListener('focus', () => {
	input.nextElementSibling.classList.add('active');
}));

inputsArray.forEach(input => input.addEventListener('blur', () => {

	if(input.value !== '') {
		return true;
	} else {
		input.nextElementSibling.classList.remove('active');
	}
	
}));

name.addEventListener('blur', nameVerify);
email.addEventListener('blur', emailVerify);
message.addEventListener('blur', messageVerify);

function nameVerify() {
	if(name.value !== '' && name.value.length >= 3) {
		name.classList.add('valid');
		name.classList.remove('invalid');
		return true;
	} else {
		name.classList.add('invalid');
		name.classList.remove('valid');
	}
}

function emailVerify() {
	if(email.value.includes('@') && email.value.includes('.')) {
		email.classList.add('valid');
		email.classList.remove('invalid');
		return true;
	} else {
		email.classList.add('invalid');
		email.classList.remove('valid');
	}
}

function messageVerify() {
	if(message.value !== '') {
		message.classList.add('valid');
		message.classList.remove('invalid');
		return false;
	} else {
		message.classList.add('invalid');
		message.classList.remove('valid');
	}
}

function validate() {
	if(name.value === '' && name.value.length < 3) { 
		name.classList.add('invalid');
		return false;
	}

	if(!email.value.includes('@') && !email.value.includes('.')) {
		email.classList.add('invalid');
		return false;
	}

	if(message.value === '') {
		message.classList.add('invalid');
		return false;
	}

	sendForm();
};

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
			clearFields();
         }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });

      return false;
};

function clearFields() {
	inputsArray.forEach(input => {
		input.value = '';
		input.nextElementSibling.classList.remove('active');
		input.classList.remove('valid');
		input.classList.remove('invalid');
	});
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// validate fields
	validate();
});
