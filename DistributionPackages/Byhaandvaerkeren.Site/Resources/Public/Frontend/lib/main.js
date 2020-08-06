'use strict';

// Initialization of Animate On Scroll
// See https://github.com/michalsnik/aos/tree/v2 for docs
document.addEventListener('DOMContentLoaded', function () {
	AOS.init({
		offset: 20,
		duration: 1000,
		easing: 'ease-expo-out'
	});
});