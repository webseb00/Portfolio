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


// TYPEIT JS

(function() {

    const firstHeading = document.querySelector('#heading');
    const secondHeading = document.querySelector('#second-heading');

    const mainHeading = () => {
        new TypeIt('#heading', {
            startDelay: 3600,
            strings: ['Cześć! Nazywam się', '<em class="name-color">Basiński Sebastian</em>'],
            speed: 100,
            waitUntilVisible: true,
            lifeLike: true,
            cursor: true,
            afterComplete: () => {
                firstHeading.lastChild.style.display = 'none';
                new TypeIt('#second-heading', {
                    strings: ['Jestem początkującym Front-End Developerem.'],
                    startDelay: 1000,
                    speed: 100,
                    waitUntilVisible: true,
                    lifeLike: true,
                    cursor: true,
                    afterComplete: () => {
                        secondHeading.lastChild.style.display = 'none';
                    }
                }).go();
            }
        }).go();
    }

    mainHeading();

}());
