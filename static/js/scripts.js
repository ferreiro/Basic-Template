// TOBE IMPLEMENTED
var mobileMenu = $('#js-navbar-menu'),
	menu = $('.headerMenu'),
	mobileSearch = $('#js-navbar-search'),
	mobileSearchForm = $('.headerSearch'),
	closeSearch = $('.headerSearchClose');

mobileMenu.click(function() {
	mobileSearchForm.hide("fast");
	mobileMenu.toggleClass('pressed');
	menu.slideToggle("fast");
});

mobileSearch.click(function() {
	menu.hide(0);
	mobileSearchForm.fadeToggle("fast");
});

closeSearch.click(function() {
	mobileSearchForm.hide();
});
