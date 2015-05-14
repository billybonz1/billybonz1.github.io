function preLoader(){
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow",function(){

	}); 
};
var consultation_slider,reviews_slider;
$(document).ready(function() {
	consultation_slider = new Swiper ('.consultation_slider', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: false,
	    autoplay: 5000,
	    // Navigation arrows
	    nextButton: '.consultation_slider .swiper-button-next',
	    prevButton: '.consultation_slider .swiper-button-prev',
	    
	});
	reviews_slider = new Swiper ('.reviews_slider', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    autoplay: 5000,
	    // Navigation arrows
	    nextButton: '.reviews_slider .swiper-button-next',
	    prevButton: '.reviews_slider .swiper-button-prev',
	    
	});

	$('.header-text3').magnificPopup({
	  type:'inline'
	});


	$(".mnu li a").mPageScroll2id();


	$(".sandwich").click(function() {
	  $(".sandwich,.top_mnu").toggleClass("active");
	});

});
$(window).load(function() { 
	preLoader();

});
$(window).resize(function(){
	$(".sandwich,.top_mnu").removeClass("active");
	consultation_slider.update(true);
	reviews_slider.update(true);
});