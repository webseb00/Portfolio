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

preloader.classList.add('active');

window.addEventListener('load', () => {
	preloader.classList.remove('active');
});


// particles.js library


// window.addEventListener('load', () => {
// 	Particles.init({
// 		selector: '.background',
// 		color: '#ffffff',
// 		connectParticles: true
// 	});
// });
