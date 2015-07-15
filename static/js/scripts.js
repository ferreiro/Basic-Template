// TOBE IMPLEMENTED
var mobileMenu = $('#js-navbar-menu'),
	menu = $('.headerMenu'),
	mobileSearch = $('#js-navbar-search'),
	mobileSearchForm = $('.headerSearch'),
	closeSearch = $('.headerSearchClose'),
	content = $("body");


	// Debug
	setInterval( function() {
		mobileMenu.click();
	}, 2000);

mobileMenu.click(function() { 
	content.toggleClass("bodyLocked");
	mobileMenu.toggleClass("pressed");
	menu.slideToggle("fast");
});

mobileSearch.click(function() {
	menu.hide(0);
	mobileMenu.removeClass("pressed");
	mobileSearchForm.fadeToggle("fast");
});

closeSearch.click(function() {
	mobileSearchForm.hide();
});
