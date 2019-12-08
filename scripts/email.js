const name = document.getElementById('name'),
	  email = document.getElementById('email'),
	  message = document.getElementById('message'),
	  form = document.getElementById('contact-form'),
	  infoText = document.getElementById('infoText-name'),
	  formGroup = document.querySelector('.form-group'),
	  formLines = document.querySelectorAll('.form-line');

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


// name field
name.addEventListener('change', checkName);
// // email field
email.addEventListener('change', checkEmail);
// // message field
message.addEventListener('change', checkMessage);

function checkName() {
	if(name.value !== '') {
		name.parentNode.childNodes[5].classList.add('valid');
		return true;
	}
}

function checkEmail() {
	if(email.value !== '') {
		email.parentNode.childNodes[5].classList.add('valid');
		return true;
	}
}

function checkMessage() {
	if(message.value !== '') {
		message.parentNode.childNodes[5].classList.add('valid');
		return true;
	}
}

// check form fields validity
function validate() {
		
	if(name.value === '') {
		name.parentNode.childNodes[5].classList.add('invalid');
		return false;
	} 

	const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if(email.value === '') {
		email.parentNode.childNodes[5].classList.add('invalid');
		return false;
	} 

	if(message.value === '') {
		message.parentNode.childNodes[5].classList.add('invalid');
		return false
	} 

	sendForm();
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
			clearFields();
         }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });

      return false;
}

function clearFields() {
	inputsArray.forEach(input => {
		input.value = '';
		input.nextElementSibling.classList.remove('active');
	});
	
	formLines.forEach(item => item.classList.remove('valid'));

}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// validate fields
	validate();
});
