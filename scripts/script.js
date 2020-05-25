const nav = document.getElementById('navigation'),
	  navButton = document.getElementById('navigation-toggle'),
	  navIcon = document.querySelector('.navbar-icon');

// show or hide main navigation

navButton.addEventListener('click', () => {
	if(nav.classList.contains('active')) {
		nav.classList.remove('active');
		navIcon.classList.remove('rotate');
	} else {
		nav.classList.add('active');
		navIcon.classList.add('rotate');
	}
});

// init preloader

const preloader = document.querySelector('#loader');

window.addEventListener('load', () => {
	preloader.classList.add('hide');
});


