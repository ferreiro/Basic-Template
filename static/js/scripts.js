// TOBE IMPLEMENTED
var mobileMenu = $('#js-navbar-menu'),
	menu = $('.headerMenu');

mobileMenu.click(function() {
	mobileMenu.toggleClass('pressed');
	menu.toggle(0);
});