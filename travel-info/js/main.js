$(document).ready(function(){

	/* TOP MENU SLIDE*/
		var top_mnu_enter_checker = false;
		$(".rubricator-shower").on("mouseenter", function(){
			if (!$(this).hasClass("active")){
				$(this).addClass("active")
				$(".top-mnu").slideDown(400);
			}
			top_mnu_enter_checker = true;
			console.log('rubricator-shower mouseenter');
		});

		$(".rubricator-shower").mouseout(function(event) {
			if(!$(event.relatedTarget).hasClass("top-mnu")){
				$(this).removeClass("active")
				$(".top-mnu").slideUp(400);
			}
			console.log('rubricator-shower mouseout');
		});

		$(".top-mnu").on("mouseleave",function(event){
			if(!$(event.relatedTarget).hasClass("rubricator-shower")){
				$(".rubricator-shower").removeClass("active")
				$(this).slideUp(400);
			}
			top_mnu_enter_checker = false;
			console.log('top-mnu mouseleave');
		});

		$(".header-select").selectpicker({
	      size: 4
	 	});
	/**/

	/*BG CHANGE*/
	/**/
	/*
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};*/

	$(".mt-horizontal.owl").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
      stopOnHover:true
	});


	/*SLIDERS*/
	var hot_topics = $("#hot-topics .owl");
	hot_topics.owlCarousel({
      items:3, //10 items above 1000px browser width
      itemsDesktop : [1422,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	$("#hot-topics .hot-topics_next").click(function(){
		hot_topics.trigger('owl.next')
	});

	$("#hot-topics .hot-topics_prev").click(function(){
	    hot_topics.trigger('owl.prev');
	});

	var week_actual = $("#week-actual .owl");
	week_actual.owlCarousel({
      items:3, //10 items above 1000px browser width
      itemsDesktop : [1422,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	$("#week-actual .hot-topics_next").click(function(){
		week_actual.trigger('owl.next')
	});

	$("#week-actual .hot-topics_prev").click(function(){
	    week_actual.trigger('owl.prev');
	});
	/**/

	$(".content").waypoint(function(direction) {
		if (direction === "down") {
			$("#top").addClass("visible");
		} else if (direction === "up") {
			$("#top").removeClass("visible");
		};
	}, {offset: -200});

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
});

(function($, document, window, viewport) {
function resizeWindow() {
	/*HTML FONT SIZE*/
	if($(document).width() < 1166 && $(document).width() > 750){
		var htmlFS = $(document).width()*10/1166;
	}else{
		var htmlFS = 10;
	}
	$("html").css("font-size",htmlFS+'px');
	/**/
};
$(document).ready(function() {
	resizeWindow();
});
$(window).resize(function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);